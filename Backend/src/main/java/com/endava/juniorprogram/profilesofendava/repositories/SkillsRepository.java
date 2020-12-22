package com.endava.juniorprogram.profilesofendava.repositories;

import com.endava.juniorprogram.profilesofendava.model.Skill;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillsRepository extends CrudRepository<Skill, String> {
}
