import './inicial.css'
import { useState } from 'react'

export default function Inicial() {

    const produtosNutricaoAnimal = [
        {
            id: 1,
            nome: "Suplemento Mineral para Bovinos de Corte",
            codigoInterno: "#2001",
            ultimoPreco: 189.90,
            fornecedor: "NutriAnimal Brasil"
        },
        {
            id: 2,
            nome: "Ração Inicial para Frangos de Corte",
            codigoInterno: "#2002",
            ultimoPreco: 98.50,
            fornecedor: "AgroNutri Alimentos"
        },
        {
            id: 3,
            nome: "Suplemento Energético para Equinos Atletas",
            codigoInterno: "#2003",
            ultimoPreco: 245.00,
            fornecedor: "Equus Nutrition"
        },
        {
            id: 4,
            nome: "Núcleo Mineral para Ovinos e Caprinos",
            codigoInterno: "#2004",
            ultimoPreco: 156.75,
            fornecedor: "VetNutri Plus"
        },
        {
            id: 5,
            nome: "Ração Terminadora para Suínos",
            codigoInterno: "#2005",
            ultimoPreco: 178.90,
            fornecedor: "Suinotec Alimentos"
        },
        {
            id: 6,
            nome: "Suplemento Proteico para Vacas Leiteiras",
            codigoInterno: "#2006",
            ultimoPreco: 267.30,
            fornecedor: "LácteoNutri"
        },
        {
            id: 7,
            nome: "Ração de Crescimento para Equinos",
            codigoInterno: "#2007",
            ultimoPreco: 198.60,
            fornecedor: "Equus Nutrition"
        },
        {
            id: 8,
            nome: "Premix Vitaminico para Aves Poedeiras",
            codigoInterno: "#2008",
            ultimoPreco: 87.90,
            fornecedor: "AgroNutri Alimentos"
        },
        {
            id: 9,
            nome: "Suplemento para Reprodução de Suínos",
            codigoInterno: "#2009",
            ultimoPreco: 234.50,
            fornecedor: "Suinotec Alimentos"
        },
        {
            id: 10,
            nome: "Ração para Cordeiros em Aleitamento",
            codigoInterno: "#2010",
            ultimoPreco: 312.00,
            fornecedor: "VetNutri Plus"
        },
        {
            id: 11,
            nome: "Suplemento para Engorda de Bovinos Confinados",
            codigoInterno: "#2011",
            ultimoPreco: 223.40,
            fornecedor: "NutriAnimal Brasil"
        },
        {
            id: 12,
            nome: "Ração de Manutenção para Cavalos Adultos",
            codigoInterno: "#2012",
            ultimoPreco: 167.80,
            fornecedor: "Equus Nutrition"
        },
        {
            id: 13,
            nome: "Suplemento Mineral para Aves em Postura",
            codigoInterno: "#2013",
            ultimoPreco: 76.50,
            fornecedor: "AgroNutri Alimentos"
        },
        {
            id: 14,
            nome: "Ração para Ovinos em Crescimento",
            codigoInterno: "#2014",
            ultimoPreco: 145.90,
            fornecedor: "VetNutri Plus"
        },
        {
            id: 15,
            nome: "Concentrado para Suínos em Fase de Creche",
            codigoInterno: "#2015",
            ultimoPreco: 192.30,
            fornecedor: "Suinotec Alimentos"
        }
    ];

    const formatarPreco = (preco) => {
        return preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    return (
        <>
            <main className="mainPadrao">
                <h1>Bem Vindo</h1>
                <p>Reunimos as suas informações mais relevantes</p>
                <section className='blocosDestaque'>
                    <div className='blocoDestaque'>
                        <p>Cotações pendentes atualmente</p>
                        <hr />
                        <h1>08</h1>
                    </div>
                    <div className='blocoDestaque'>
                        <p>Cotações sob análise</p>
                        <hr />
                        <h1>03</h1>
                    </div>
                    <div className='blocoDestaque'>
                        <p>Concluídas (Abril - 2026)</p>
                        <hr />
                        <h1>26</h1>
                    </div>
                </section>
                <section className='ultimasCotacoesPendentesLista'>
                    <h3>Últimas solicitações de compra</h3>
                    <div className="tabela-container">
                        <table className="tabela-produtos">
                            <thead>
                                <tr>
                                    <th>Nome do Produto</th>
                                    <th>Código Interno</th>
                                    <th>Fornecedor</th>
                                    <th>Último Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtosNutricaoAnimal.map((produto) => (
                                    <tr key={produto.id}>
                                        <td>{produto.nome}</td>
                                        <td>{produto.codigoInterno}</td>
                                        <td>{produto.fornecedor}</td>
                                        <td>{formatarPreco(produto.ultimoPreco)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    )
}