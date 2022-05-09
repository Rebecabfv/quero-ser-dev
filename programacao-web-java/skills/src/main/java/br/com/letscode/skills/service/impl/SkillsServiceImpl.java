package br.com.letscode.skills.service.impl;

import br.com.letscode.skills.dto.SkillsDto;
import br.com.letscode.skills.service.SkillsService;
import org.springframework.stereotype.Service;

@Service
public class SkillsServiceImpl implements SkillsService {

    @Override
    public SkillsDto getSkillsById(int id) {
        return new SkillsDto();
    }

    @Override
    public void uptadeSkills() {

    }

    @Override
    public void deleteSkills() {

    }
}
