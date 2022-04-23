package com.letscode.avaliacao;

public class AvaliacaoImplementacao implements Avaliacao{

    @Override
    public boolean avaliar(double nota, int faltas) {
        if (faltas > 5 && nota < 5) {
            return false;
        }
        else {
            return true;
        }
    }

    // Isso cria muitos metodos para pouca modificacao
    public boolean avaliarAlunoNota6(double nota, int faltas) {
        if (faltas > 5 || nota < 5) {
            return false;
        }
        else {
            return true;
        }
    }
}
