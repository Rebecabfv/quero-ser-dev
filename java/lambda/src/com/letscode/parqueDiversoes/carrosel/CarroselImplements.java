package com.letscode.parqueDiversoes.carrosel;

import com.letscode.parqueDiversoes.Brinquedo;

public class CarroselImplements implements Brinquedo {

//    Carrossel: permitido para pessoas maiores de 6 anos e com altura acima de 1,30
    @Override
    public boolean avaliarRequisitosBrinquedo(int idade, double altura) {
       if (idade > 6 && altura > 1.30){
           return  true;
       }
       else {
           return false;
       }
    }
}
