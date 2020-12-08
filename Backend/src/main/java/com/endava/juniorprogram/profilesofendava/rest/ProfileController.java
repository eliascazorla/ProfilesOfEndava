package com.endava.juniorprogram.profilesofendava.rest;

import com.endava.juniorprogram.profilesofendava.model.Profile;
import com.endava.juniorprogram.profilesofendava.services.IProfilesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/profiles")
public class ProfileController {
    @Autowired
    private IProfilesService profilesService;

    @GetMapping
    public List<Profile> getProfiles(@RequestParam(required = false) String fullName,
                                     @RequestParam(required = false)Long tenure,
                                     @RequestParam(required = false)String seniority,
                                     @RequestParam(required = false)String skill){
        if(fullName!=null){
            return profilesService.getByFullName(fullName);
        }
        if(tenure!=null){
            return profilesService.getByTenure((long) tenure);
        }
        if(seniority!=null) {
            return profilesService.getBySeniority(seniority);
        }
        if(skill!=null){
            return profilesService.getBySkill(skill);
        }
        return profilesService.getAll();
    }

    @GetMapping("{id}")
    public Profile getProfileById(@PathVariable("id") long id) {
        return profilesService.getById(id);
    }

    @GetMapping("/developer/{id}")
    public Profile getProfileByDev(@PathVariable("id") long idDev){return profilesService.getByDevId(idDev);}
}
