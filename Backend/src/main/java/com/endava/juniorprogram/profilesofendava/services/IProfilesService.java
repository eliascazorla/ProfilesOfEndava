package com.endava.juniorprogram.profilesofendava.services;

import com.endava.juniorprogram.profilesofendava.model.Profile;

import java.util.List;

public interface IProfilesService {
    List<Profile> getByName(String name);
    List<Profile> getByTenure(long tenure);
    List<Profile> getBySeniority(String seniority);
    List<Profile> getBySkill(String skill);
    List<Profile> getAll();
    Profile getById(long id);
    Profile getByDevId(long id);
    Profile addProfile(Profile profile);
    Profile updateProfile(Profile profile);
}
