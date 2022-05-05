package br.com.letscode.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping(path = "/hello-world-antigo", produces = MediaType.APPLICATION_JSON_VALUE)
    public String helloWorldAntigo (){
        return "Olá mundo antigo!";
    }

    @GetMapping(path = "/hello-world", produces = MediaType.APPLICATION_JSON_VALUE)
    public String helloWorld (){
        return "Olá mundo!";
    }
}
