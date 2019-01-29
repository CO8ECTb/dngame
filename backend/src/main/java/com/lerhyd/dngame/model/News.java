package com.lerhyd.dngame.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * Simple JavaBean object that represents role of {@link News},
 * describes world news.
 */


@Data
@Entity
@Table(name = "news")
public class News implements Serializable {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;

    @Column(name = "what", nullable = false, length = 500)
    private String whatDid;

    @Column(name = "publication_date", nullable = false)
    private LocalDateTime publicationDateTime;

    @OneToOne
    @JoinColumn(name = "action_id")
    private Action action;

    @ManyToOne
    @JoinColumn(name = "agent_id")
    private Agent agent;

    @ManyToOne
    @JoinColumn(name = "kira_id")
    private Kira kira;

    @ManyToOne
    @JoinColumn(name = "distribution_region_id")
    private Region distributionRegion;

    @ManyToOne
    @JoinColumn(name = "where")
    private Region whereDid;

    @OneToOne
    @JoinColumn(name = "over_whom")
    private SupposedVictim supposedVictim;

    @ManyToOne
    @JoinColumn(name = "killer_id")
    private Person killer;

    public News(){

    }

    public News(String whatDid, LocalDateTime publicationDate, Action action, Agent agent, Kira kira, Region distributionRegion, Region whereDid, SupposedVictim supposedVictim, Person killer) {
        this.whatDid = whatDid;
        this.publicationDateTime = publicationDate;
        this.action = action;
        this.agent = agent;
        this.kira = kira;
        this.distributionRegion = distributionRegion;
        this.whereDid = whereDid;
        this.supposedVictim = supposedVictim;
        this.killer = killer;
    }
}
