package com.endava.juniorprogram.profilesofendava.services;

import com.endava.juniorprogram.profilesofendava.repositories.ProfilesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfilesService implements IProfilesService{
    @Autowired
    private ProfilesRepository profilesRepository;
}
