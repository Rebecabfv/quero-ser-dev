package com.letscode.exercicio;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class ListaCompras {
    public static void main(String[] args) {
        List<String> compras = List.of("Arroz","Feijao","Batata", "Ervilha", "Pao", "Banana", "Maca", "Suco", "Cerveja", "Macarrao", "Acai");

        compras.stream().filter(alimentos -> alimentos.startsWith("B")).forEach(System.out::println);

        long contagemLista = compras.stream().filter(alimentos -> alimentos.startsWith("E")).count();
        System.out.println(contagemLista);

        compras.stream().sorted().limit(5).forEach(System.out::println);

        List<String> comprasMaiusculas = compras.stream().map(alimento -> alimento.toUpperCase()).collect(Collectors.toList());
        System.out.println(comprasMaiusculas);

        Optional<String> reducedValue = compras.stream()
                .map(alimento -> alimento.toUpperCase())
                .reduce((alimento1, alimento2) -> alimento1 + "---" + alimento2);
        reducedValue.ifPresent(System.out::println);

       String reducedValueWithString = compras.stream()
                .map(alimento -> alimento.toUpperCase())
                .reduce((alimento1, alimento2) -> alimento1 + "---" + alimento2)
                .orElse("Lista vazia");
        System.out.println(reducedValueWithString);

        //reduce with int
        List<Integer> numbers = List.of(1, 2, 3);
        int result = numbers.stream().reduce(3, (subtotal, element) -> subtotal + element);
        System.out.println(result);
    }
}
