package br.com.letscode.controller;

import br.com.letscode.controller.dto.HelloWorldDTO;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
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
}
