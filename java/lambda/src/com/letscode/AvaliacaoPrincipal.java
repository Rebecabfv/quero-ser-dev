package com.letscode;

public class AvaliacaoPrincipal {

    public static void main(String[] args) {
        Avaliacao avaliacaoVarInterface = new AvaliacaoImplementacao();
        AvaliacaoImplementacao avaliacaoImplementacao = new AvaliacaoImplementacao();

        avaliacaoVarInterface.avaliar(5,6);
        avaliacaoImplementacao.avaliar(5,6);

        avaliarAlunoMain(avaliacaoVarInterface);

        //Classe anonima
        avaliarAlunoMain(new Avaliacao() {
            @Override
            public boolean avaliar(double nota, int faltas) {
                if (faltas > 5 || nota < 6){
                    return false;
                }
                else {
                    return false;
                }
            }
        });

//        Classe anonima atribuida ao objetivo
//        Avaliacao avaliacaoClasseAnonima = new Avaliacao() {
//            @Override
//            public boolean avaliar(double nota, int faltas) {
//                if (faltas > 5 || nota < 6){
//                    return false;
//                }
//                else {
//                    return false;
//                }
//            }
//        };

//        Lambda: sempre para FunctionInterface (apenas um metodo da interface)
        avaliarAlunoMain((nota, faltas) -> {
            if (nota > 5 && faltas < 10) {
                return true;
            }
            else {
                return false;
            }
        });

        Avaliacao avaliacaoLambda = (nota, faltas) -> {
            if (nota > 5 && faltas < 10) {
                return true;
            }
            else {
                return false;
            }
        };

        avaliarAlunoMain(avaliacaoLambda);
    }

    public static void avaliarAlunoMain(Avaliacao avaliacao){
        avaliacao.avaliar(5,6);
    }
}
