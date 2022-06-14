package br.com.letscode.skills.controller;

import br.com.letscode.skills.dto.SkillsDto;
import br.com.letscode.skills.service.impl.SkillsServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping (path = "/skills")
public class ApiController {

    private final SkillsServiceImpl skillsService;

    @GetMapping (path = "/{id}")
    public ResponseEntity<SkillsDto> getSkills (@PathVariable(name = "id") Integer id){
        log.info("GET {}", id);
        var skillsDto = skillsService.getSkillsById(id);
        return new ResponseEntity(skillsDto , HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> saveSkills (@RequestBody final SkillsDto skillsDto) {
        log.info("POST {}", skillsDto);
        skillsService.save(skillsDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping (path = "/{id}")
    public ResponseEntity<SkillsDto> uptadeSkills (@RequestBody final SkillsDto skillsDto){
        log.info("PUT {}", skillsDto);
        skillsService.uptadeSkills(skillsDto);
        return new ResponseEntity<>(skillsDto, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> deleteSkills (@PathVariable final Integer id){
        skillsService.deleteSkills(id);

        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

}
