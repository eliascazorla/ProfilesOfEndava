package com.endava.juniorprogram.profilesofendava.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String fullName;
    @Temporal(TemporalType.DATE)
    private Date bornDate;
    private long tenure;
    private String seniority;
    @OneToMany(cascade = CascadeType.ALL)
    private Collection<SkillLevel> skills;
    @OneToMany(cascade = CascadeType.ALL)
    private Collection<Work> historicalProjects;

    @OneToOne( cascade = CascadeType.ALL)
    @JoinColumn(name = "id_Dev")
    @JsonIgnoreProperties("profile")
    private Developer dev;

    public Profile(String fullName, Date bornDate, long tenure, String seniority, Collection<SkillLevel> skills, Collection<Work> historicalProjects) {
        this.fullName = fullName;
        this.bornDate = bornDate;
        this.tenure = tenure;
        this.seniority = seniority;
        this.skills = skills;
        this.historicalProjects = historicalProjects;
    }

    public Profile() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Date getBornDate() {
        return bornDate;
    }

    public void setBornDate(Date bornDate) {
        this.bornDate = bornDate;
    }

    public long getTenure() {
        return tenure;
    }

    public void setTenure(long tenure) {
        this.tenure = tenure;
    }

    public String getSeniority() {
        return seniority;
    }

    public void setSeniority(String seniority) {
        this.seniority = seniority;
    }


    public Collection<SkillLevel> getSkills() {
        return skills;
    }

    public void setSkills(Collection<SkillLevel> skills) {
        this.skills = skills;
    }

    public Collection<Work> getHistoricalProjects() {
        return historicalProjects;
    }

    public void setHistoricalProjects(Collection<Work> historicalProjects) {
        this.historicalProjects = historicalProjects;
    }

    public Developer getDev() {
        return dev;
    }

    public void setDev(Developer dev) {
        this.dev = dev;
    }
}
