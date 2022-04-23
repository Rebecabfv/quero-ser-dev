package com.letscode.parqueDiversoes;

import java.util.function.BiPredicate;

public class BrinquedosMain {
    public static void main(String[] args) {
        //Carrosel
        CarroselImplements carroselImplements = new CarroselImplements();
        carroselImplements.avaliarRequisitosBrinquedo(7,1.67);

        avaliarBrinquedos(new Brinquedo() {
            @Override
            public boolean avaliarRequisitosBrinquedo(int idade, double altura) {
                if (idade > 6 && altura > 1.30){
                    return true;
                }
                else {
                    return false;
                }
            }
        });

        avaliarBrinquedos(((idade, altura) -> {
            if (idade > 6 && altura > 1.30){
                return true;
            }
            else {
                return false;
            }
        }));

        BiPredicate<Integer, Double> carrosel = (idade, altura) -> (idade > 6 && altura > 1.30);
        carrosel.test(17, 1.64);

        //Montanha Russa
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

        //Roda Gigante
        RodaGiganteImplements rodaGiganteImplements = new RodaGiganteImplements();
        rodaGiganteImplements.avaliarRequisitosBrinquedo(7,1.67);

        avaliarBrinquedos(new Brinquedo() {
            @Override
            public boolean avaliarRequisitosBrinquedo(int idade, double altura) {
                return true;
            }
        });

        avaliarBrinquedos((idade, altura) ->  true );

        BiPredicate<Integer, Double> rodaGigante = (idade, altura) -> true;
        rodaGigante.test(17, 1.64);
    }

    public static void avaliarBrinquedos(Brinquedo brinquedo){
        brinquedo.avaliarRequisitosBrinquedo(15,1.60);
    }
}
