package com.lerhyd.dngame.controller;

import com.lerhyd.dngame.dao.*;
import com.lerhyd.dngame.info.EntryInfo;
import com.lerhyd.dngame.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Stream;

@RestController
public class EntryController {

    @Autowired
    private EntryDao entryDao;

    @Autowired
    private KiraDao kiraDao;

    @Autowired
    private AgentDao agentDao;

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
    public void addEntry(@RequestParam("kiraId") long kiraId,
                         @RequestParam("pageNum") int pageNum,
                         @RequestParam("deathReasonId") int deathReasonId,
                         @RequestParam("victimName") String victimName,
                         @RequestParam("victimSername") String victimSername,
                         @RequestParam("victimPatr") String victimPatr,
                         @RequestParam("victimSex") boolean victimSex,
                         @RequestParam("desc") String desc,
                         @RequestParam("deathDate") String deathDate,
                         @RequestParam("deathPlaceId") long deathPlaceId,
                         @RequestParam("deathRegionId") long deathRegionId)
    {
        boolean isExists = personDao.existsByNameAndSurnameAndPatronymicAndSex(victimName, victimSername, victimPatr, victimSex);
        if (isExists){
            Entry entry = getFormedEntry(pageNum, deathDate, desc, deathReasonId, deathPlaceId, deathRegionId,
                    kiraId, victimName, victimSername, victimPatr, victimSex);
            entryDao.save(entry);
            newsDao.save(generateNewsFromEntry(entry, kiraId));
            kiraDao.addPoints(5, kiraId);
        } else {
            Entry entry = getFormedEntry(pageNum, deathDate, desc, deathReasonId, deathPlaceId, deathRegionId,
                    kiraId, victimName, victimSername, victimPatr, victimSex);
            entryDao.save(entry);
            kiraDao.deletePoints(10, kiraId);
        }
    }

    private News generateNewsFromEntry(Entry entry, long kiraId){
        String desc = entry.getDescription();
        Kira kira = entry.getKira();
        ActionPlace actionPlace = entry.getActionPlace();
        Action action = entry.getAction();
        LocalDateTime dateTime = entry.getDeathDataTime();
        Region region = entry.getDeathRegion();
        Action deathReason = entry.getAction();
        Person victim = entry.getVictim();

        News news = new News(
                desc,
                action,
                actionPlace,
                victim,
                kira.getNews().get(1).getAgent(),
                kira,
                region,
                region,
                null,
                null
        );

        return news;
    }

    private Entry getFormedEntry(int pageNum, String deathDate, String desc,
                                long actionId,
                                long actionPlaceId,
                                long deathRegionId,
                                long kiraId,
                                String victimName,
                                String victimSername,
                                String victimPatr,
                                boolean victimSex){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        Entry entry = new Entry(
                pageNum,
                LocalDateTime.parse(deathDate, formatter),
                desc,
                actionDao.findById(actionId),
                actionPlaceDao.findById(actionPlaceId),
                regionDao.findById(deathRegionId),
                kiraDao.findById(kiraId),
                personDao.findByNameAndSurnameAndPatronymicAndSex(victimName, victimSername, victimPatr, victimSex)
        );
        return entry;
    }

}
