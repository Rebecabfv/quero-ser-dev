//1 - Definição de pacote
package com.letscode;

//2 - Definição dos imports
import  java.time.*;

//3 - Declaração de classe
public class Teste {
    //4 - Declaração das variaveis de instancia
    int anInt = 0;

    // Declaracao de arrays: arrays é um colecao de variaveis
    int [] array = new int[10];
    int [] array2 = {100, 200, 300};

    public static void main (String[] args){
        System.out.println(calculoSoma(1,2));
    }
    //5 - Declaração de métodos
    public static int calculoSoma(int a, int b){
        return a + b;
    }
}
