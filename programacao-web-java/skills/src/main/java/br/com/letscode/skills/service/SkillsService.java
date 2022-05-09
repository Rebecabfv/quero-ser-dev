package br.com.letscode.skills.service;

import br.com.letscode.skills.dto.SkillsDto;

public interface SkillsService {

    SkillsDto getSkillsById(int id);

    void uptadeSkills();

    void deleteSkills();
}
