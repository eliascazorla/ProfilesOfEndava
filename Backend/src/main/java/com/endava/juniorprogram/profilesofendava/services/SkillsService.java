package com.endava.juniorprogram.profilesofendava.services;

import com.endava.juniorprogram.profilesofendava.model.Skill;
import com.endava.juniorprogram.profilesofendava.repositories.SkillsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillsService implements ISkillsService{

    @Autowired
    private SkillsRepository skillsRepository;


    @Override
    public List<Skill> getAllSkills() {
        return (List<Skill>) skillsRepository.findAll();
    }
}
