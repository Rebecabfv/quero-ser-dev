package com.letscode;

import java.util.function.BiPredicate;

public class AvaliacaoMainExercicio {

    public static void main(String[] args) {
//        Usando a interface Avaliacao, como do exemplo em aula, implemente o metodo avaliar para os seguintes cenarios abaixo:
//        Aluno aprovado caso nota acima de 6 e faltas abaixo de 5
//        Aluno aprovado caso nota acima de 5 e faltas abaixo de 20
//        Implemente como isso seria feito usando:
//        a) Implementacao da Interface (como AvaliacaoImplementacao)
//        b) Usando classe anonima
//        c) Usando lambda expression
//        d) Usando BiPredicate

        AvaliacaoImplementacao avaliacaoImplementacao = new AvaliacaoImplementacao();
        avaliacaoImplementacao.avaliar(8,7);

        avaliar(new Avaliacao() {
            @Override
            public boolean avaliar(double nota, int faltas) {
                if (nota > 6 && faltas < 5){
                    return true;
                }
                else {
                    return false;
                }
            }
        });

        avaliar(((nota, faltas) -> {
            if (nota > 5 && faltas < 20){
                return true;
            }
            else {
                return false;
            }
        }));

        BiPredicate<Integer, Integer> avaliacao = (nota, faltas) -> (nota > 6 && faltas < 5);
        System.out.println(avaliacao.test(20, 1));

    }

    public static void avaliar(Avaliacao avaliacao) {
        avaliacao.avaliar(4,5);
    }
}
