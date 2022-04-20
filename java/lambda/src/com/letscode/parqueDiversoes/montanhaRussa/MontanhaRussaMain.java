package com.letscode.parqueDiversoes.montanhaRussa;

import com.letscode.parqueDiversoes.Brinquedo;

import java.util.function.BiPredicate;

public class MontanhaRussaMain {
    public static void main(String[] args) {
        MontanhaRussaImplements montanhaRussaImplements = new MontanhaRussaImplements();
        montanhaRussaImplements.avaliarRequisitosBrinquedo(12,1.60);

        avaliarBrinquedos(new Brinquedo() {
            @Override
            public boolean avaliarRequisitosBrinquedo(int idade, double altura) {
                if (idade > 16 && altura > 1.55){
                    return true;
                }
                else {
                    return false;
                }
            }
        });

        avaliarBrinquedos(((idade, altura) -> {
            if (idade > 16 && altura > 1.55){
                return true;
            }
            else {
                return false;
            }
        }));

        BiPredicate<Integer, Double> montanhaRussa = (idade, altura) -> (idade > 16 && altura > 1.55);
        montanhaRussa.test(17, 1.64);
    }

    public static void avaliarBrinquedos(Brinquedo brinquedo){
        brinquedo.avaliarRequisitosBrinquedo(15,1.60);
    }
}
