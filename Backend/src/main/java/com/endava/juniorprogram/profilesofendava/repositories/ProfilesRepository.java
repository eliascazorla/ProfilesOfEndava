package com.endava.juniorprogram.profilesofendava.repositories;

import com.endava.juniorprogram.profilesofendava.model.Profile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfilesRepository extends CrudRepository<Profile, Long> {
}
