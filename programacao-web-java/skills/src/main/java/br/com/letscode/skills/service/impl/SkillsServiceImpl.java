package br.com.letscode.skills.service.impl;

import br.com.letscode.skills.domain.model.SkillsEntity;
import br.com.letscode.skills.domain.repository.SkillsRepository;
import br.com.letscode.skills.dto.SkillsDto;
import br.com.letscode.skills.exception.SkillsNotFoundException;
import br.com.letscode.skills.service.SkillsService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Log4j2
@Service
@AllArgsConstructor
public class SkillsServiceImpl implements SkillsService {

    final SkillsRepository repository;

    @Override
    public SkillsEntity getSkillsById(final Integer id) throws SkillsNotFoundException {

        return repository
                .findById(id)
                .orElseThrow(() -> new SkillsNotFoundException("Skills Not Found"));
    }

    @Override
    public void save(final SkillsDto skillsDto) {
        SkillsEntity skillsEntity = new SkillsEntity(skillsDto.getId(), skillsDto.getNome(), skillsDto.getDescricao());
        repository.save(skillsEntity);
    }

    @Override
    public void uptadeSkills(final SkillsDto skillsDto) throws SkillsNotFoundException {

        repository.findById(skillsDto.getId());

        final SkillsEntity skillsEntity = SkillsEntity.builder()
                .id(skillsDto.getId())
                .nome(skillsDto.getNome())
                .descricao(skillsDto.getDescricao())
                .build();
        repository.save(skillsEntity);
    }

    @Override
    public void deleteSkills(Integer id) throws SkillsNotFoundException{
        try {
            final SkillsEntity skillsEntity = findSkillsById(id);
            repository.delete(skillsEntity);
        }
        catch (SkillsNotFoundException msg){
            log.error(msg.getMessage());
            throw msg;
        }
    }

    private SkillsEntity findSkillsById(Integer id) throws SkillsNotFoundException{
        return repository
                .findById(id)
                .orElseThrow(() -> new SkillsNotFoundException ("Skills Not Found"));
    }


//    try {
//
//        checkNotNull(username);
//        checkArgument(todoId > 0);
//
//        userService.findUserByUsername(username);
//
//        final TodoEntity todoEntity = findTodoById(todoId);
//
//        repository.delete(todoEntity);
//
//    } catch (UserNotFoundException e) {
//        log.error("Usuario nao encontrado: " + username);
//        log.error(e.getMessage());
//        throw e;
//    } catch (TodoNotFoundException e) {
//        log.error("TodoEntity nao encontrado: " + todoId);
//        log.error(e.getMessage());
//        throw e;
//    }

}
