package com.endava.juniorprogram.profilesofendava.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;

@Entity
@DiscriminatorValue(value = "Developer")
public class Developer extends User{
    @OneToOne(mappedBy = "dev", fetch = FetchType.LAZY)
    private Profile profile;

    public Developer(long id, String mail, String password) {
        super(id, mail, password);
    }

    public Developer() {

    }

    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
    }
}
