import './produtosFornecedores.css'
import { useState } from 'react'

export default function ProdutosFornecedores() {

    const listaProdutos = [
        {
            id: 1,
            nome: "Suplemento Mineral para Bovinos de Corte"
        },
        {
            id: 2,
            nome: "Ração Inicial para Frangos de Corte"
        },
        {
            id: 3,
            nome: "Suplemento Energético para Equinos Atletas"
        },
        {
            id: 4,
            nome: "Núcleo Mineral para Ovinos e Caprinos"
        },
        {
            id: 5,
            nome: "Ração Terminadora para Suínos"
        },
        {
            id: 6,
            nome: "Suplemento Proteico para Vacas Leiteiras"
        },
        {
            id: 7,
            nome: "Ração de Crescimento para Equinos"
        },
        {
            id: 8,
            nome: "Premix Vitaminico para Aves Poedeiras"
        },
        {
            id: 9,
            nome: "Suplemento para Reprodução de Suínos"
        },
        {
            id: 10,
            nome: "Ração para Cordeiros em Aleitamento"
        },
        {
            id: 11,
            nome: "Suplemento para Engorda de Bovinos Confinados"
        },
        {
            id: 12,
            nome: "Ração de Manutenção para Cavalos Adultos"
        },
        {
            id: 13,
            nome: "Suplemento Mineral para Aves em Postura"
        },
        {
            id: 14,
            nome: "Ração para Ovinos em Crescimento"
        },
        {
            id: 15,
            nome: "Concentrado para Suínos em Fase de Creche"
        }
    ];

    const fornecedores = [
        {
            id: 1,
            nome: "NutriAnimal Brasil",
            cnpj: "12.345.678/0001-90",
            cidade: "Cuiabá",
            estado: "MT",
            distancia: 450,
            precoAtual: 189.90,
            tempoMedioEntrega: 5,
            email: "contato@nutrianimal.com.br",
            telefone: "(65) 3345-6789"
        },
        {
            id: 2,
            nome: "AgroNutri Alimentos",
            cnpj: "23.456.789/0001-01",
            cidade: "Cascavel",
            estado: "PR",
            distancia: 280,
            precoAtual: 98.50,
            tempoMedioEntrega: 3,
            email: "vendas@agronutri.com.br",
            telefone: "(45) 3456-7890"
        },
        {
            id: 3,
            nome: "Equus Nutrition",
            cnpj: "34.567.890/0001-12",
            cidade: "Campinas",
            estado: "SP",
            distancia: 120,
            precoAtual: 245.00,
            tempoMedioEntrega: 2,
            email: "comercial@equusnutrition.com.br",
            telefone: "(19) 3456-7891"
        },
        // {
        //     id: 4,
        //     nome: "VetNutri Plus",
        //     cnpj: "45.678.901/0001-23",
        //     cidade: "Passo Fundo",
        //     estado: "RS",
        //     distancia: 380,
        //     precoAtual: 156.75,
        //     tempoMedioEntrega: 4,
        //     email: "sac@vetnutriplus.com.br",
        //     telefone: "(54) 3456-7892"
        // }
    ];

    const formatarPreco = (preco) => {
        return preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    return (
        <>
            <main className="mainFornecedores">
                <h1>Produtos e Fornecedores</h1>
                <p>Acompanhe tudo sobre os produtos cadastrados no sistema</p>
                <hr />
                <p><b>Produto:</b></p>
                <select name="" id="" className='selectProdutos'>
                    {listaProdutos.map((produto) => {
                        return (
                            <>
                                <option value={produto.id}>
                                    {produto.nome}
                                </option>
                            </>
                        )
                    })}
                </select>
                <h3>Fornecedores para este produto</h3>
                <section className='fornecedoreProdutosAux'>
                    {fornecedores.map((fornecedor) => {
                        return (
                            <div className='fornecedorProdutoCard'>
                                <h2 className='tituloFonteFina'>{fornecedor.nome}</h2>
                                <p><b>CNPJ {fornecedor.cnpj}</b></p>
                                <p>{fornecedor.email}</p>
                                <p>{fornecedor.telefone}</p>
                                <hr />
                                <div className='dadosCard'>
                                    <p><b>Localização: </b>{fornecedor.cidade} - {fornecedor.estado}</p>
                                    <hr />
                                    <p><b>Distância:</b> {fornecedor.distancia} KM</p>
                                    <hr />
                                    <p><b>Tempo médio de entrega:</b> {fornecedor.tempoMedioEntrega} dias</p>
                                    <hr />
                                    <p><b>Preço atualizado:</b> {formatarPreco(fornecedor.precoAtual)}</p>
                                </div>
                                <div className='auxBotoesFornecedores'>
                                    <button>Entrar em contato</button>
                                    <button>Editar</button>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </main>
        </>
    )
}