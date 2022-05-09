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
    public ResponseEntity<SkillsDto> getSkills (@PathVariable(name = "id") int id){
        log.info("GET {}", id);
        var skillsDto = skillsService.getSkillsById(id);

        return new ResponseEntity(skillsDto , HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<SkillsDto> postSkills (@RequestBody SkillsDto skillsDto){

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<SkillsDto> uptadeSkills (@RequestBody SkillsDto skillsDto){
        skillsService.uptadeSkills();
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping (path = "/{id}")
    public ResponseEntity<SkillsDto> deleteSkills (@PathVariable(name = "id") int id) {
        skillsService.deleteSkills();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
