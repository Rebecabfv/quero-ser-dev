package br.com.letscode.skills.service;

import br.com.letscode.skills.domain.model.SkillsEntity;
import br.com.letscode.skills.dto.SkillsDto;

public interface SkillsService {

    SkillsEntity getSkillsById(Integer id);

    void save(SkillsDto skillsDto);

    void uptadeSkills(SkillsDto skillsDto);

    void deleteSkills(Integer id);
}
