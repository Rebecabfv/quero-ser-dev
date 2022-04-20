package com.letscode.parqueDiversoes.montanhaRussa;

import com.letscode.parqueDiversoes.Brinquedo;

public class MontanhaRussaImplements implements Brinquedo {
    //        Montanha Russa: permitido para pessoas maiores de 16 anos e com altura acima de 1,55
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
