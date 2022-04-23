package com.letscode.avaliacao;

@FunctionalInterface
public interface Avaliacao {
    boolean avaliar(double nota, int faltas);
}