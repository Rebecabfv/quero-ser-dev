package com.letscode;

@FunctionalInterface
public interface Avaliacao {
    boolean avaliar(double nota, int faltas);
}