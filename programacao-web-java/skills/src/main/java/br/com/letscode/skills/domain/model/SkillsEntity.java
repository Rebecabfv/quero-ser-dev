package br.com.letscode.skills.domain.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SkillsEntity {

    @Id
    @GeneratedValue
    private Integer id;

    private String nome;

    private String descricao;
}
