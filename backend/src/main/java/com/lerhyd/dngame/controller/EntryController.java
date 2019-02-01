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

    @GetMapping("/entry")
    public Stream<EntryInfo> getEntries(@RequestParam("kiraId") long kiraId){
        return entryDao.findAllByKira(kiraId).stream().map(EntryInfo::new);
    }

    @PostMapping("/entry/add")
    public void addEntry(@RequestBody EntryReq entryReq)
    {
        //check if Entry's Person exists
        boolean isExists = personDao.existsByNameAndSurnameAndPatronymicAndSex(entryReq.getVictimName(),
                                                                                entryReq.getVictimSername(),
                                                                                entryReq.getVictimPatr(),
                                                                                entryReq.isVictimSex());
        if (isExists){
            Entry entry = getFormedEntry(entryReq, false);
            entryDao.save(entry);
            newsDao.save(generateNewsFromEntry(entry));
            boolean isCriminal = personDao.checkPersonIfCriminal(entryReq.getVictimName(),
                                            entryReq.getVictimSername(),
                                            entryReq.getVictimPatr(),
                                            entryReq.isVictimSex());
            if (isCriminal){
                kiraDao.deletePoints(10, entryReq.getKiraId());
            } else {
                kiraDao.addPoints(10, entryReq.getKiraId());
            }

        } else {
            Entry entry = getFormedEntry(entryReq, true);
            entryDao.save(entry);
            kiraDao.deletePoints(30, entryReq.getKiraId());
        }
    }

    private boolean checkIfLose(long kiraId){
        if (kiraDao.findPointsById(kiraId)<=0){
            return true;
        } else {
            return false;
        }
    }

    private boolean checkIfWin(long kiraId){
        if (kiraDao.findKilledCriminalsByKiraId(kiraId) >=25){
            return true;
        } else {
            return false;
        }
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
                desc,
                isDeathDate ? deathDate : deathWithoutDate,
                action,
                actionPlace,
                victim,
                kira.getNews().get(0).getAgent(),
                kira,
                region,
                region,
                null,
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
            Entry entry = new Entry(
                    entryReq.getPageNum(),
                    LocalDateTime.parse(entryReq.getDeathDate(), formatter),
                    entryReq.getDesc(),
                    actionDao.findById(entryReq.getActionId()),
                    actionPlaceDao.findById(entryReq.getActionPlaceId()),
                    regionDao.findById(entryReq.getDeathRegionId()),
                    kiraDao.findById(entryReq.getKiraId()),
                    personDao.findByNameAndSurnameAndPatronymicAndSex(entryReq.getVictimName(),
                                                                      entryReq.getVictimSername(),
                                                                      entryReq.getVictimPatr(),
                                                                      entryReq.isVictimSex())
            );
            return entry;
        } else {
            Person unrealVictim = new Person(
                    entryReq.getVictimName(),
                    entryReq.getVictimSername(),
                    entryReq.getVictimPatr(),
                    entryReq.isVictimSex(),
                    LocalDateTime.now(),
                    LocalDateTime.parse(entryReq.getDeathDate(), formatter),
                    true,
                    false,
                    null,
                    null,
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
