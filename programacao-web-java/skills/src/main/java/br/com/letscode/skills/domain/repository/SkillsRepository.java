package br.com.letscode.skills.domain.repository;

import br.com.letscode.skills.domain.model.SkillsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillsRepository extends JpaRepository<SkillsEntity, Integer> {
}
