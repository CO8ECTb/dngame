package com.lerhyd.dngame.dao;

import com.lerhyd.dngame.model.Achievement;
import com.lerhyd.dngame.model.Agent;
import com.lerhyd.dngame.model.Kira;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.awt.print.Pageable;
import java.util.List;

@Repository
public interface KiraDao extends JpaRepository<Kira, Integer> {

    @Query("select k.points from Kira k where k.id = :id")
    Integer findPointsById(@Param("id") int id);

    @Query("select r.id from Kira k join k.region r where r.country=:country and r.city=:city")
    int findRegionsIdByCountryAndCity(@Param("country") String country, @Param("city") String city);

    @Transactional
    @Modifying
    @Query("update Kira k set k.region.id=:regionId where k.id = :kiraId")
    void setRegion(@Param("kiraId") int kiraId, @Param("regionId") int regionId);

    Kira findById(int id);

    @Query("select k.numberOfKills from Kira k where k.id = :kiraId")
    int findKilledCriminalsByKiraId(@Param("kiraId") int kiraId);

    @Transactional
    @Modifying
    @Query("update Kira k set k.numberOfKills = k.numberOfKills + 1 where k.id = :kiraId")
    void addKilledCrimianl(@Param("kiraId") int kiraId);

    @Transactional
    @Modifying
    @Query("update Kira k set k.lvl = k.lvl + 1 where k.id = :id")
    void levelup(@Param("id") int kiraId);

    @Transactional
    @Modifying
    @Query("update Kira k set k.points= k.points + :points where k.id=:id")
    void addPoints(@Param("points") int points, @Param("id") int kiraId);

    @Transactional
    @Modifying
    @Query("update Kira k set k.points= k.points - :points where k.id=:id")
    void deletePoints(@Param("points") int points, @Param("id") int kiraId);

    @Query("select k from Kira k where k.news is empty")
    List<Kira> findKirasWithoutNews();

    @Query("select (count(k) > 0) from Kira k where k.id = :kiraId and k.news is not empty")
    boolean existsWithNewsByKiraId(@Param("kiraId") int kiraId);

    @Transactional
    @Modifying
    @Query("update Kira k set k.numberOfKills = k.numberOfKills + 1 where k.id=:id")
    void addNumberOfRightKills(@Param("id") int kiraId);

    @Query("select a from Kira k join k.achievements a where k.id = :id")
    List<Achievement> getAchievements(@Param("id") int kiraId);

}

