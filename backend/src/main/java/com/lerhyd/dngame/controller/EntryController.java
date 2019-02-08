package com.lerhyd.dngame.controller;

import com.lerhyd.dngame.dao.*;
import com.lerhyd.dngame.info.EntryInfo;
import com.lerhyd.dngame.model.*;
import com.lerhyd.dngame.request.EntryReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.stream.Stream;

@SuppressWarnings("Duplicates")
@RestController
public class EntryController {

    @Autowired
    private EntryDao entryDao;

    @Autowired
    private KiraDao kiraDao;

    @Autowired
    private PersonDao personDao;

    @Autowired
    private ActionDao actionDao;

    @Autowired
    private ActionPlaceDao actionPlaceDao;

    @Autowired
    private RegionDao regionDao;

    @Autowired
    private NewsDao newsDao;

    @Autowired
    private AgentDao agentDao;

    @Autowired
    private RankDao rankDao;

    @GetMapping("/game/entry")
    public Stream<EntryInfo> getEntries(@RequestParam("kiraId") int kiraId){
        return entryDao.findAllByKira(kiraId).stream().map(EntryInfo::new);
    }

    @PostMapping("/game/entry/add")
    public int addEntry(@RequestBody EntryReq entryReq)
    {
        long cntEntriesInPage = entryDao.findCntOfEntriesInOnePage(entryReq.getKiraId(), entryReq.getPageNum());
        if (cntEntriesInPage == 10){
            return 1;
        }

        int maxPageNum = entryDao.findMaxNumPageByKiraId(entryReq.getKiraId()).orElse(1);
        if ((entryReq.getPageNum() - 1) > maxPageNum)
            return 2;
        if (!kiraDao.existsById(entryReq.getKiraId())){
            return 3;
        }

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        if (LocalDateTime.parse(entryReq.getDeathDate(), formatter).isBefore(LocalDateTime.now()))
            return 4;

        if (kiraDao.getOne(entryReq.getKiraId()).getUser().getProfile() == null)
            return 5;

        if (kiraDao.getOne(entryReq.getKiraId()).getNews().get(0) == null)
            return 6;

        deletePointsOfKira(entryReq.getKiraId(), 5);

        boolean isEntryVictimExists = entryDao.existsEntryByVictim_NameAndVictim_SurnameAndVictim_PatronymicAndVictim_Sex(
                entryReq.getVictimName(),
                entryReq.getVictimSurname(),
                entryReq.getVictimPatr(),
                entryReq.isVictimSex()
        );
        if (isEntryVictimExists)
            return 7;

        boolean isPersonExists = personDao.existsByNameAndSurnameAndPatronymicAndSex(entryReq.getVictimName(),
                entryReq.getVictimSurname(),
                entryReq.getVictimPatr(),
                entryReq.isVictimSex());
        if (isPersonExists) {
            Entry entry = getFormedEntry(entryReq, false);
            entryDao.save(entry);
            newsDao.save(generateNewsFromEntry(entry));
            boolean isCriminal = personDao.findIfCriminal(
                    entryReq.getVictimName(),
                    entryReq.getVictimSurname(),
                    entryReq.getVictimPatr(),
                    entryReq.isVictimSex()).orElse(false);
            if (!isCriminal) {
                deletePointsOfKira(entryReq.getKiraId(), 10);
                System.out.println("delete 10 point from Kira");
            } else {
                addPointsOfKira(entryReq.getKiraId(), 15);
                addNumberOfKills(entryReq.getKiraId());
                System.out.println("add 15 points to kira and addNumberOfKills");
            }

        } else {
            Entry entry = getFormedEntry(entryReq, true);
            entryDao.save(entry);
            deletePointsOfKira(entryReq.getKiraId(), 5);
            System.out.println("delete 5 points from Kira");
        }
        Person guiltyPerson = personDao.findByNameAndSurnameAndPatronymicAndSex(
                entryReq.getVictimName(),
                entryReq.getVictimSurname(),
                entryReq.getVictimPatr(),
                entryReq.isVictimSex()
        );
        int points = kiraDao.findPointsById(entryReq.getKiraId());
        if (points < 0)
            return 8;//agent won

        if (newsDao.findIfKiraWasFound(guiltyPerson.getId(), entryReq.getKiraId()))
            return 9;//agent won

        if (newsDao.findIfNewsIsAgentGenerated(guiltyPerson.getId(), entryReq.getKiraId())){
            int agentId = kiraDao.getOne(entryReq.getKiraId()).getNews().get(0).getAgent().getId();
            agentDao.addPoints(40, agentId);
        }
        Kira kira = kiraDao.getOne(entryReq.getKiraId());
        if (kira.getNumberOfKills() >= 3){
            if (kira.getNumberOfKills() > 30)
                kira.setLvl(11);
            kira.setLvl(kira.getNumberOfKills()/3);
        }
        kiraDao.save(kira);
        setRankToKira(entryReq.getKiraId());
        return 0;
    }

    private void addPointsOfKira(int kiraId, int points){
        Kira kiraToSave = kiraDao.getOne(kiraId);
        kiraToSave.setPoints(kiraToSave.getPoints() + points);
        kiraDao.save(kiraToSave);
    }

    private void deletePointsOfKira(int kiraId, int points){
        Kira kiraToSave = kiraDao.getOne(kiraId);
        kiraToSave.setPoints(kiraToSave.getPoints() - points);
        kiraDao.save(kiraToSave);
    }

    private void addNumberOfKills(int kiraId){
        Kira kiraToSave = kiraDao.getOne(kiraId);
        kiraToSave.setNumberOfKills(kiraToSave.getNumberOfKills() + 1);
        kiraDao.save(kiraToSave);
    }

    private boolean setRankToKira(int kiraId){
        Kira kira = kiraDao.getOne(kiraId);
        boolean isDone = false;

        isDone = setKiraRankInRange(kira, 30, 40, 1);
        if (isDone)
            return true;
        isDone = setKiraRankInRange(kira, 40, 50, 2);
        if (isDone)
            return true;
        isDone = setKiraRankInRange(kira, 50, 60, 3);
        if (isDone)
            return true;
        isDone = setKiraRankInRange(kira, 60, 80, 4);
        if (isDone)
            return true;
        isDone = setKiraRankInRange(kira, 80, 100, 5);
        if (isDone)
            return true;
        isDone = setKiraRankInRange(kira, 100, 170, 6);
        if (isDone)
            return true;
        isDone = setKiraRankInRange(kira, 170, 256, 7);
        if (isDone)
            return true;
        isDone = setKiraRankInRange(kira, 256, 0, 8);
        if (isDone)
            return true;
        return false;

    }

    private boolean setKiraRankInRange(Kira kira, int from, int to, int rankNum){
        if (to != 0){
            if (kira.getPoints() < 30)
                return true;
            if (kira.getPoints() >= from && kira.getPoints() < to){
                if (kira.getRank().getId() > rankDao.findRankByClassAndId(true, rankNum).getId())
                    return true;
                kira.setRank(rankDao.findRankByClassAndId(true, rankNum));
            } else
                return false;
        } else {
            if (kira.getPoints() >= from) {
                if (kira.getRank().getId() > rankDao.findRankByClassAndId(true, rankNum).getId())
                    return true;
                kira.setRank(rankDao.findRankByClassAndId(true, rankNum));
            } else
                return false;
        }

        kiraDao.save(kira);
        return true;
    }

    private News generateNewsFromEntry(Entry entry){
        String desc = entry.getDescription();
        Kira kira = entry.getKira();
        ActionPlace actionPlace = entry.getActionPlace();
        Action action = entry.getAction();
        Region region = entry.getDeathRegion();
        Person victim = entry.getVictim();
        boolean isDeathDate = false;
        LocalDateTime deathDate = entry.getDeathDataTime();
        LocalDateTime deathWithoutDate = LocalDateTime.now().plusSeconds(40);
        if (deathDate != null)
            isDeathDate = true;

        News news = new News(
                false,
                false,
                false,
                false,
                false,
                true,
                desc,
                isDeathDate ? deathDate : deathWithoutDate,
                action,
                actionPlace,
                victim,
                kira.getNews().get(0).getAgent(),
                kira,
                region,
                region,
                null
        );
        Person victimToUpdate = personDao.getOne(victim.getId());
        if (isDeathDate) {
            victimToUpdate.setDeathDate(deathDate);
        } else {
            victimToUpdate.setDeathDate(deathWithoutDate);
        }
        personDao.save(victimToUpdate);
        return news;
    }

    private Entry getFormedEntry(EntryReq entryReq,
                                 boolean isUselessEntry){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        if (!isUselessEntry) {
            personDao.findByNameAndSurnameAndPatronymicAndSex(entryReq.getVictimName(),
                    entryReq.getVictimSurname(),
                    entryReq.getVictimPatr(),
                    entryReq.isVictimSex());
            Entry entry = new Entry(
                    entryReq.getPageNum(),
                    LocalDateTime.parse(entryReq.getDeathDate(), formatter),
                    entryReq.getDesc(),
                    actionDao.findById(entryReq.getActionId()),
                    actionPlaceDao.findById(entryReq.getActionPlaceId()),
                    regionDao.findById(entryReq.getDeathRegionId()),
                    kiraDao.findById(entryReq.getKiraId()),
                    personDao.findByNameAndSurnameAndPatronymicAndSex(entryReq.getVictimName(),
                                                                      entryReq.getVictimSurname(),
                                                                      entryReq.getVictimPatr(),
                                                                      entryReq.isVictimSex())
            );
            return entry;
        } else {
            Person unrealVictim = new Person(
                    entryReq.getVictimName(),
                    entryReq.getVictimSurname(),
                    entryReq.getVictimPatr(),
                    entryReq.isVictimSex(),
                    LocalDateTime.now(),
                    LocalDateTime.parse(entryReq.getDeathDate(), formatter),
                    true,
                    false,
                    null,
                    null,
                    null
                    );

            Entry entry = new Entry(
                    entryReq.getPageNum(),
                    LocalDateTime.parse(entryReq.getDeathDate(), formatter),
                    entryReq.getDesc(),
                    actionDao.findById(entryReq.getActionId()),
                    actionPlaceDao.findById(entryReq.getActionPlaceId()),
                    regionDao.findById(entryReq.getDeathRegionId()),
                    kiraDao.findById(entryReq.getKiraId()),
                    unrealVictim
            );
            unrealVictim.setEntry(entry);
            personDao.save(unrealVictim);
            return entry;
        }

    }



}
