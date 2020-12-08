package com.endava.juniorprogram.profilesofendava.services;

import com.endava.juniorprogram.profilesofendava.model.Profile;
import com.endava.juniorprogram.profilesofendava.repositories.ProfilesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfilesService implements IProfilesService{
    @Autowired
    private ProfilesRepository profilesRepository;

    @Override
    public List<Profile> getByFullName(String fullName) {
        return profilesRepository.getByFullName(fullName);
    }

    @Override
    public List<Profile> getByTenure(long tenure) {
        return profilesRepository.getByTenure(tenure);
    }

    @Override
    public List<Profile> getBySeniority(String seniority) {
        return profilesRepository.getBySeniority(seniority);
    }

    @Override
    public List<Profile> getBySkill(String skill) {
        return profilesRepository.findBySkills_Skill_Name(skill);
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
}
