package com.letscode;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ExercicioNio {

    public static void main(String args []) throws IOException {
        Path path = Paths.get("arquivoentrada.txt");

        frases();
        pedraPorRochaNIO();
        ultimaModificacao(path);
        retirarLinhas (path);
    }

    private static void frases() throws IOException {
        Path path = Paths.get("arquivoFrases.txt");
        List<String> contents = Arrays.asList("Minhas frases", "Outra frase favorita");
        Files.write(path, contents, StandardCharsets.UTF_8,
                StandardOpenOption.CREATE);
    }

    private static void pedraPorRochaNIO() throws IOException {
        Path path = Paths.get("arquivoentrada.txt");
        Stream<String> content = Files.lines(path);
        List<String> lista = content.map(l -> {
            if (l.contains("pedra"))
                return l.replace("pedra", "rocha");
            return l;
        }).collect(Collectors.toList());

        Path saida = Paths.get("arquivoSaidaPedra.txt");
        Files.write(saida, lista, StandardCharsets.UTF_8,
                StandardOpenOption.CREATE);
    }

    private static void ultimaModificacao(Path path) throws IOException {
        System.out.println("Last modified: "+Files.getLastModifiedTime(path));
    }

    public static void retirarLinhas(Path file){
        try {
            Path newFile = Paths.get ("arquivoNIO.txt");
            Stream<String> stream = Files.lines(file);

            List<String> fileWithoutSpace = stream.filter(l -> !l.isEmpty())
                            .collect(Collectors.toList());

            stream.close();

            Files.write(newFile, fileWithoutSpace,
                    StandardCharsets.UTF_8,
                    StandardOpenOption.CREATE);

        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
