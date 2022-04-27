package com.letscode.exercicio;

public class FuncionarioService {

    public static void main(String[] args) {
        FuncionarioComissionado funcionarioComissionado = new FuncionarioComissionado("Rebeca", 1, 30.0, 2);
        System.out.println(funcionarioComissionado);
        System.out.println(funcionarioComissionado.calcularSalario());
    }
}
