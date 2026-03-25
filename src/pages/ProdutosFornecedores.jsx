import './produtosFornecedores.css'
import { useState } from 'react'

const formatarPreco = (preco) => {
    return preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
};

function EditarFornecedor({ fornecedor = null, fecharjanelaFornecedor }) {
    return (
        <>
            <div className='backgroundFecharCotacao'>
                <div className='janelaFecharCotacao janelaEditarFornecedor'>
                    <h1>{
                        fornecedor == null ?
                            <>Novo Fornecedor</> : <>Editar Fornecedor</>
                    }</h1>
                    <p>Verifique se todos os campos estão preenchidos corretamente antes de salvar.</p>
                    <p>Nome</p>
                    <input
                        type="text"
                        placeholder="Nome do fornecedor"
                        defaultValue={fornecedor?.nome || ""}
                    />
                    <p>CNPJ</p>
                    <input
                        type="text"
                        placeholder="CNPJ"
                        defaultValue={fornecedor?.cnpj || ""}
                    />
                    <p>Local</p>
                    <div className='spanMesmaLinha'>
                        <input
                            type="text"
                            placeholder="Cidade"
                            defaultValue={fornecedor?.cidade || ""}
                        />
                        <input
                            type="text"
                            placeholder="Estado (UF)"
                            defaultValue={fornecedor?.estado || ""}
                        />
                        <p>Distância (KM):</p>
                        <input
                            type="number"
                            placeholder="Distância (km)"
                            defaultValue={fornecedor?.distancia || ""}
                        />
                    </div>
                    <p>Tempo médio de entregas (dias):</p>
                    <input
                        type="number"
                        placeholder="Tempo médio de entrega (dias)"
                        defaultValue={fornecedor?.tempoMedioEntrega || ""}
                    />
                    <p>Preço atualizado (R$)</p>
                    <input
                        type="number"
                        step="0.01"
                        placeholder="Preço atual (R$)"
                        defaultValue={fornecedor?.precoAtual || ""}
                    />
                    <p>Email</p>
                    <input
                        type="email"
                        placeholder="E-mail"
                        defaultValue={fornecedor?.email || ""}
                    />
                    <p>Telefone</p>
                    <input
                        type="tel"
                        placeholder="Telefone"
                        defaultValue={fornecedor?.telefone || ""}
                    />

                    {fornecedor?.id && (
                        <input
                            type="hidden"
                            name="id"
                            value={fornecedor.id}
                        />
                    )}
                    <hr />
                    <div className='auxBotoesFornecedores'>
                        <button>Salvar</button>
                        <button>Excluir</button>
                        <button
                            onClick={() => fecharjanelaFornecedor(false)}
                        >Fechar</button>
                    </div>

                </div>
            </div>
        </>
    )
}


export default function ProdutosFornecedores() {

    const [janelaFornecedor, setJanelaFornecedor] = useState(false);
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState(null);

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

    const cotacoesHistorico = [
        {
            id: 1,
            nome: "Suplemento Mineral para Bovinos de Corte",
            codigoInterno: "#2001",
            ultimoPreco: 189.90,
            fornecedor: "NutriAnimal Brasil",
            local: "MT",
            distancia: 450,
            frete: 320.00,
            custoAtual: 189.90,
            status: "finalizada",
            dataFechamento: "2026-03-20 14:30:00"
        },
        {
            id: 2,
            nome: "Ração Inicial para Frangos de Corte",
            codigoInterno: "#2002",
            ultimoPreco: 98.50,
            fornecedor: "AgroNutri Alimentos",
            local: "PR",
            distancia: 280,
            frete: 185.50,
            custoAtual: 98.50,
            status: "em avaliação",
            dataFechamento: null
        },
        {
            id: 3,
            nome: "Suplemento Energético para Equinos Atletas",
            codigoInterno: "#2003",
            ultimoPreco: 245.00,
            fornecedor: "Equus Nutrition",
            local: "SP",
            distancia: 120,
            frete: 95.00,
            custoAtual: 245.00,
            status: "finalizada",
            dataFechamento: "2026-03-22 09:15:00"
        },
        {
            id: 4,
            nome: "Núcleo Mineral para Ovinos e Caprinos",
            codigoInterno: "#2004",
            ultimoPreco: 156.75,
            fornecedor: "VetNutri Plus",
            local: "RS",
            distancia: 380,
            frete: 245.00,
            custoAtual: 156.75,
            status: "em avaliação",
            dataFechamento: null
        },
        {
            id: 5,
            nome: "Ração Terminadora para Suínos",
            codigoInterno: "#2005",
            ultimoPreco: 178.90,
            fornecedor: "Suinotec Alimentos",
            local: "SC",
            distancia: 220,
            frete: 165.00,
            custoAtual: 178.90,
            status: "finalizada",
            dataFechamento: "2026-03-21 11:45:00"
        },
        {
            id: 6,
            nome: "Suplemento Proteico para Vacas Leiteiras",
            codigoInterno: "#2006",
            ultimoPreco: 267.30,
            fornecedor: "LácteoNutri",
            local: "MG",
            distancia: 310,
            frete: 210.50,
            custoAtual: 267.30,
            status: "em avaliação",
            dataFechamento: null
        },
        {
            id: 7,
            nome: "Ração de Crescimento para Equinos",
            codigoInterno: "#2007",
            ultimoPreco: 198.60,
            fornecedor: "Equus Nutrition",
            local: "SP",
            distancia: 95,
            frete: 78.00,
            custoAtual: 198.60,
            status: "finalizada",
            dataFechamento: "2026-03-23 16:20:00"
        },
        {
            id: 8,
            nome: "Premix Vitaminico para Aves Poedeiras",
            codigoInterno: "#2008",
            ultimoPreco: 87.90,
            fornecedor: "AgroNutri Alimentos",
            local: "PR",
            distancia: 150,
            frete: 110.00,
            custoAtual: 87.90,
            status: "em avaliação",
            dataFechamento: null
        },
        {
            id: 9,
            nome: "Suplemento para Reprodução de Suínos",
            codigoInterno: "#2009",
            ultimoPreco: 234.50,
            fornecedor: "Suinotec Alimentos",
            local: "SC",
            distancia: 180,
            frete: 135.00,
            custoAtual: 234.50,
            status: "finalizada",
            dataFechamento: "2026-03-19 10:00:00"
        },
        {
            id: 10,
            nome: "Ração para Cordeiros em Aleitamento",
            codigoInterno: "#2010",
            ultimoPreco: 312.00,
            fornecedor: "VetNutri Plus",
            local: "RS",
            distancia: 420,
            frete: 295.00,
            custoAtual: 312.00,
            status: "em avaliação",
            dataFechamento: null
        },
        {
            id: 11,
            nome: "Suplemento para Engorda de Bovinos Confinados",
            codigoInterno: "#2011",
            ultimoPreco: 223.40,
            fornecedor: "NutriAnimal Brasil",
            local: "MT",
            distancia: 520,
            frete: 380.00,
            custoAtual: 223.40,
            status: "finalizada",
            dataFechamento: "2026-03-22 13:30:00"
        },
        {
            id: 12,
            nome: "Ração de Manutenção para Cavalos Adultos",
            codigoInterno: "#2012",
            ultimoPreco: 167.80,
            fornecedor: "Equus Nutrition",
            local: "SP",
            distancia: 85,
            frete: 68.50,
            custoAtual: 167.80,
            status: "em avaliação",
            dataFechamento: null
        },
        {
            id: 13,
            nome: "Suplemento Mineral para Aves em Postura",
            codigoInterno: "#2013",
            ultimoPreco: 76.50,
            fornecedor: "AgroNutri Alimentos",
            local: "PR",
            distancia: 200,
            frete: 145.00,
            custoAtual: 76.50,
            status: "finalizada",
            dataFechamento: "2026-03-18 08:45:00"
        },
        {
            id: 14,
            nome: "Ração para Ovinos em Crescimento",
            codigoInterno: "#2014",
            ultimoPreco: 145.90,
            fornecedor: "VetNutri Plus",
            local: "RS",
            distancia: 350,
            frete: 230.00,
            custoAtual: 145.90,
            status: "em avaliação",
            dataFechamento: null
        },
        {
            id: 15,
            nome: "Concentrado para Suínos em Fase de Creche",
            codigoInterno: "#2015",
            ultimoPreco: 192.30,
            fornecedor: "Suinotec Alimentos",
            local: "SC",
            distancia: 140,
            frete: 105.00,
            custoAtual: 192.30,
            status: "finalizada",
            dataFechamento: "2026-03-21 14:00:00"
        }
    ];

    const formatarData = (data) => {
        if (!data) return "-";

        const date = new Date(data);
        return date.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
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
                                    <button
                                        onClick={() => {
                                            setFornecedorSelecionado(fornecedor);
                                            setJanelaFornecedor(true);
                                        }}
                                    >Editar</button>
                                </div>
                            </div>
                        )
                    })}
                    <div className='fornecedorProdutoCard ultimoCard'>
                        <button
                            onClick={() => {
                                setFornecedorSelecionado(null);
                                setJanelaFornecedor(true);
                            }}
                        >
                            +
                        </button>
                    </div>
                </section>
                {/* <h3>Histórico de cotações para este produto</h3> */}
                <section className='cotacoesPendentes cotacoesTelaFornecedores'>
                    <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p><b>Histórico de cotações para este produto</b></p>
                        <input type="text" name="" id="" placeholder='pesquisar' className='inputPesquisar' />
                    </span>
                    <div className="tabela-container">
                        <table className="tabela-produtos">
                            <thead>
                                <tr>
                                    <th>Código <br />Interno</th>
                                    {/* <th>Produto</th> */}
                                    <th>Fornecedor</th>
                                    <th>Local</th>
                                    <th>Preço</th>
                                    {/* <th>Preço atual</th> */}
                                    <th>Frete</th>
                                    <th>Distância</th>
                                    <th>Total <br /> (com impostos)</th>
                                    <th>Status</th>
                                    <th>Data <br />fechamento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cotacoesHistorico.map((produto) => (
                                    <tr key={produto.id}>
                                        <td>{produto.codigoInterno}</td>
                                        {/* <td><b>{produto.nome}</b></td> */}
                                        <td>{produto.fornecedor}</td>
                                        <td>{produto.local}</td>
                                        <td>{formatarPreco(produto.ultimoPreco)}</td>
                                        {/* <td>{formatarPreco(produto.custoAtual)}</td> */}
                                        <td>{formatarPreco(produto.frete)}</td>
                                        <td>{produto.distancia}</td>
                                        <td><b>{formatarPreco(produto.custoAtual + produto.frete)}</b></td>
                                        <td>
                                            <b>
                                                {produto.status === 'finalizada' ?
                                                    <span style={{ color: 'green' }}>Finalizada</span> : <span style={{ color: 'orange' }}>Em análise</span>
                                                }
                                            </b>
                                        </td>
                                        <td>
                                            {formatarData(produto.dataFechamento)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            {janelaFornecedor && (
                <>
                    <EditarFornecedor
                        fornecedor={fornecedorSelecionado}
                        fecharjanelaFornecedor={setJanelaFornecedor}
                    />
                </>
            )}
        </>
    )
}