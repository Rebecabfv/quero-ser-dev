package com.letscode.parqueDiversoes;

public class MontanhaRussaImplements implements Brinquedo {
    @Override
    public boolean avaliarRequisitosBrinquedo(int idade, double altura) {
        if (idade > 16 && altura > 1.55){
            return true;
        }
        else {
            return false;
        }
    }
}
