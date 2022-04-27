package com.letscode.exercicio;

public class FuncionarioComissionado {
    private String nome;
    private int matricula;
    private double valorVendas;
    private double comissao;

    public FuncionarioComissionado(final String nome, final int matricula) {
        this.nome = nome;
        this.matricula = matricula;
    }

    public FuncionarioComissionado(final String nome,final int matricula,final double valorVendas, final double comissao) {
        this.nome = nome;
        this.matricula = matricula;
        this.valorVendas = valorVendas;
        this.comissao = comissao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getMatricula() {
        return matricula;
    }

    public double getValorVendas() {
        return valorVendas;
    }

    public void setValorVendas(final double valorVendas) {
        this.valorVendas = valorVendas;
    }

    public double getComissao() {
        return comissao;
    }

    public void setComissao(final double comissao) {
        this.comissao = comissao;
    }

    @Override
    public String toString() {
        return "FuncionarioComissionado{" +
                "nome='" + nome + '\'' +
                ", matricula=" + matricula +
                ", valorVendas=" + valorVendas +
                ", comissao=" + comissao +
                '}';
    }

    public double calcularSalario (){
        return valorVendas * comissao;
    }

}
