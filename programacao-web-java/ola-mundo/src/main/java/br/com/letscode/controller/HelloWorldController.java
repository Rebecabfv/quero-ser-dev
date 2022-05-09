package br.com.letscode.controller;

import br.com.letscode.controller.dto.HelloWorldDTO;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Log4j2
public class HelloWorldController {

    @GetMapping(path = "/hello-world-antigo", produces = MediaType.APPLICATION_JSON_VALUE)
    public String helloWorldAntigo (){
        return "Olá mundo antigo!";
    }

    @GetMapping(path = "/hello-world")
    public HelloWorldDTO helloWorld (){
        HelloWorldDTO helloWorldDTO = new HelloWorldDTO();
        helloWorldDTO.setMensagem("Ola mundo");
        helloWorldDTO.setUsername("rebeca");
        return helloWorldDTO;
    }

    @GetMapping(path = "/hello-world/{nome}")
    public HelloWorldDTO helloWorld (@PathVariable(name = "nome", required = false) String nome){
        var helloWorld = new HelloWorldDTO();
        helloWorld.setMensagem("Bem-vindo " + nome);
        helloWorld.setUsername(nome);
        return helloWorld;
    }

    @GetMapping(path = "/hello-world-response/{nome}")
    public ResponseEntity<HelloWorldDTO> helloWorldFinal (@PathVariable(name = "nome") String nome){
        var helloWorld = new HelloWorldDTO();
        helloWorld.setUsername(nome);
        helloWorld.setMensagem("Bem-vindo " + nome);
        log.info("GET: "+helloWorld);
        return new ResponseEntity(helloWorld, HttpStatus.OK);
    }

    //POST - envia com @RequestBody - return void e retorna um status de created
    @PostMapping(path = "/hello-world-response")
    public ResponseEntity<Void> postSimulation (@RequestBody HelloWorldDTO helloWorldDto){
        log.info("POST: "+helloWorldDto);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    //PUT
    @PutMapping(path = "/hello-world-response")
    public ResponseEntity<Void> putSimulation(@RequestBody HelloWorldDTO helloWorldDto){
        log.info("PUT: "+helloWorldDto);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    //DELETE
    @DeleteMapping(path = "/hello-world-response/{nome}")
    public ResponseEntity<Void> deleteSimulation(@PathVariable(name = "nome") String nome){
        log.info("APAGANDO: "+ nome);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
