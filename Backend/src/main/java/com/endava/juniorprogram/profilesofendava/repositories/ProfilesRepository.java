package com.endava.juniorprogram.profilesofendava.repositories;

import com.endava.juniorprogram.profilesofendava.model.Profile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfilesRepository extends CrudRepository<Profile, Long> {
    List<Profile> findByFullNameIgnoreCaseContaining(String name);
    List<Profile> getByTenure(long tenure);
    List<Profile> findBySeniorityIgnoreCaseContaining(String seniority);
    List<Profile> findBySkills_Skill_NameIgnoreCaseContaining(String name);
    Profile getByDevId(long id);
}
