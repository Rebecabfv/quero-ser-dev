package com.letscode;

public class Escola {

    public static void main(String[] args) {
        Aluno aluno = new Aluno();
        aluno.faltas = 6;
        aluno.matricula = "1234ABC";
        aluno.nome = "Rebeca";
        aluno.nota = 8;
        aluno.idade = 18;
        resultadoSemestre (aluno);
    }

    public static void resultadoSemestre(Aluno aluno){
        if (aluno.nota < 6 || aluno.faltas > 11){
            System.out.println("Nome: "+ aluno.nome + ", matrícula: " + aluno.matricula + " foi aprovado!");
        }
        else {
            System.out.println("Nome: "+ aluno.nome + ", matrícula: " + aluno.matricula + " foi reprovado!");
        }
    }
}
