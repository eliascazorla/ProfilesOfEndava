package com.endava.juniorprogram.profilesofendava.rest;

import com.endava.juniorprogram.profilesofendava.services.IProfilesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/profiles")
public class ProfileController {
    @Autowired
    private IProfilesService profilesService;
}
