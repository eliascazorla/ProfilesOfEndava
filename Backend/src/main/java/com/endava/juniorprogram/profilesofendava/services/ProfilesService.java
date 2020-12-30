package com.endava.juniorprogram.profilesofendava.services;

import com.endava.juniorprogram.profilesofendava.model.Profile;
import com.endava.juniorprogram.profilesofendava.repositories.ProfilesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProfilesService implements IProfilesService{
    @Autowired
    private ProfilesRepository profilesRepository;


    @Override
    public List<Profile> getByFilter(String filter) {
        List<Profile> profilesByName = profilesRepository.findByFullNameIgnoreCaseContaining(filter);
        List<Profile> profilesBySeniority = profilesRepository.findBySeniorityIgnoreCaseContaining(filter);
        List<Profile> profilesBySkill = profilesRepository.findDistinctBySkills_Skill_NameIgnoreCaseContaining(filter);
        if(profilesByName.stream().count() > 0){
            return profilesByName;
        }
        if(profilesBySeniority.stream().count() > 0){
            return profilesBySeniority;
        }
        if(profilesBySkill.stream().count() > 0){
            return profilesBySkill;
        }
        return new ArrayList<Profile>();
    }

    @Override
    public List<Profile> getAll() {
        return (List<Profile>) profilesRepository.findAll();
    }

    @Override
    public Profile getById(long id) {
        return profilesRepository.findById(id).get();
    }

    @Override
    public Profile getByDevId(long id) {
        return profilesRepository.getByDevId(id);
    }

    @Override
    public Profile addProfile(Profile profile) {
        return profilesRepository.save(profile);
    }

    @Override
    public Profile updateProfile(Profile profile) {
        return profilesRepository.save(profile);
    }
}
