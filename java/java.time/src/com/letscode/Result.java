package com.letscode;

public class Result {
    public static void main(String[] args) {
        verifyAproved ("Rebeca", 4.0, 6);
    }

    static void verifyAproved (String nome, double nota, int numeroFaltas){
        if (nota < 5 || numeroFaltas > 10){
            System.out.println(nome + " foi reprovado, a nota foi de: " + nota);
        }
        else {
            System.out.println(nome + " foi aprovado, a nota foi de: " + nota);
        }
    }

}
