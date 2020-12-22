package com.endava.juniorprogram.profilesofendava.rest;

import com.endava.juniorprogram.profilesofendava.model.Skill;
import com.endava.juniorprogram.profilesofendava.services.ISkillsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/skills")
public class SkillController {

    @Autowired
    private ISkillsService skillsService;

    @GetMapping
    public List<Skill> getSkills(){
        return skillsService.getAllSkills();
    }
}
