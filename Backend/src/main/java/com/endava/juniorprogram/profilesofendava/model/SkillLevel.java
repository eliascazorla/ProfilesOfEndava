package com.endava.juniorprogram.profilesofendava.model;

import javax.persistence.*;

@Entity
public class SkillLevel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int level;

    @OneToOne
    private Skill skill;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public Skill getSkill() {
        return skill;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }

    public SkillLevel(int level, Skill skill) {
        this.level = level;
        this.skill = skill;
    }

    public SkillLevel() {
    }
}
