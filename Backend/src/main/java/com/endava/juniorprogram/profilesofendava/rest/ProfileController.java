package com.endava.juniorprogram.profilesofendava.rest;

import com.endava.juniorprogram.profilesofendava.model.Profile;
import com.endava.juniorprogram.profilesofendava.services.IProfilesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/profiles")
public class ProfileController {
    @Autowired
    private IProfilesService profilesService;

    @GetMapping
    public List<Profile> getProfiles(@RequestParam(required = false) String filter){
        if(filter!=null){
            return profilesService.getByFilter(filter);
        }
        return profilesService.getAll();
    }

    @GetMapping("{id}")
    public Profile getProfileById(@PathVariable("id") long id) {
        return profilesService.getById(id);
    }

    @GetMapping("/developer/{id}")
    public Profile getProfileByDev(@PathVariable("id") long idDev){return profilesService.getByDevId(idDev);}

    @PostMapping
    public Profile createProfile(@RequestBody Profile profile){
        return profilesService.addProfile(profile);
    }

    @PutMapping
    public Profile updateProfile(@RequestBody Profile profile){
        return profilesService.updateProfile(profile);
    }
}
