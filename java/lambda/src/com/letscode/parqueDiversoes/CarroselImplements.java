package com.letscode.parqueDiversoes;

public class CarroselImplements implements Brinquedo {
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
