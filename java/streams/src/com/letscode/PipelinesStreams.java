package com.letscode;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class PipelinesStreams {
    public static void main(String[] args) {
        List<String> animais = new ArrayList<String>();

        animais.add("Cat");
        animais.add("Dog");
        animais.add("Horse");
        animais.add("Cat");
        animais.add("Dog");

        //Pipeline
        String animaisString = animais // <-- Source: lista
                .stream() //sequencia de elementos: carreaga os valores da lista animais, para poder ser manipulado em uma pipeline
                .filter(a -> a.startsWith("D")) //Funcao intermediaria (n obrigatoria)
                .reduce((animais1, animais2) -> animais1 + "," + animais2) //Funcao terminal
                .orElse("Valor"); // é uma Optional

        System.out.println(animaisString);

        animais.stream().distinct().forEach(animal -> System.out.println(animal)); // retira os elementos que repetem

        animais.stream().sorted().forEach(animal -> System.out.println(animal)); // ordena os elementos

        animais.stream().limit(2).forEach(animal -> System.out.println(animal)); // limita a quantidade de elementos

        animais.stream().skip(2).forEach(animal -> System.out.println(animal)); // pular uma quantidade de elementos

        boolean valor = animais.stream().allMatch(a -> a.startsWith("a")); // verifica se todos obedecem a condicao
        System.out.println(valor);

        boolean valorAny = animais.stream().anyMatch(a -> a.startsWith("D")); // verifica se alguem obedece a condicao
        System.out.println(valorAny);

        //Colect: coleta os valores e transforma em uma estrutura de dados
        List<String> listaColetada = animais.stream().filter(a -> a.startsWith("D")).collect(Collectors.toList());
        System.out.println(listaColetada);

        long countAnimais = animais.stream().count();
        System.out.println(countAnimais);

    }
}
