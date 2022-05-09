package br.com.letscode.skills.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SkillsDto {
    private int id;
    private String nome;
    private String descricao;
}
