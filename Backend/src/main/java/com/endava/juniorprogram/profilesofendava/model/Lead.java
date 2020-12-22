package com.endava.juniorprogram.profilesofendava.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue(value = "Lead")
public class Lead extends User{
    public Lead(long id, String mail, String password) {
        super(id, mail, password);
    }

    public Lead() {
        super();
    }
}
