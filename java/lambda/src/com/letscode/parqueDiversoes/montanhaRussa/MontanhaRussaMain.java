package com.letscode.parqueDiversoes;

public class BrinquedoMain {
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


    }

    public static void avaliarBrinquedos(Brinquedo brinquedo){
        brinquedo.avaliarRequisitosBrinquedo(15,1.60);
    }
}
