package br.com.letscode.controller.dto;

import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class HelloWorldDTO {
    private String mensagem;
    private String username;
    private LocalDateTime data;
    private Integer idade;
}
