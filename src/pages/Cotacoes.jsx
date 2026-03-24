import './cotacoes.css'

export default function Cotacoes() {
    const cotacoesPendentes = [
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

    const formatarPreco = (preco) => {
        return preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

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
            <main className="mainCotacoes">
                <h1>Cotações</h1>
                <p>Histórico de todas as solicitações de compra registradas no sistema</p>
                <section className='cotacoesPendentes'>
                    <p><b>Cotações pendentes</b></p>
                    <div className="tabela-container">
                        <table className="tabela-produtos">
                            <thead>
                                <tr>
                                    <th>Código Interno</th>
                                    <th>Produto</th>
                                    <th>Fornecedor</th>
                                    <th>Último Preço</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cotacoesPendentes.map((produto) => (
                                    <tr key={produto.id}>
                                        <td>{produto.codigoInterno}</td>
                                        <td>{produto.nome}</td>
                                        <td>{produto.fornecedor}</td>
                                        <td>{formatarPreco(produto.ultimoPreco)}</td>
                                        <td>
                                            <button className='botaoCotacao'>
                                                Resolver
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className='cotacoesHistorico'>
                    <p><b>Todas as cotações</b></p>
                    <div className="tabela-container">
                        <table className="tabela-produtos">
                            <thead>
                                <tr>
                                    <th>Código Interno</th>
                                    <th>Produto</th>
                                    <th>Fornecedor</th>
                                    <th>Local</th>
                                    <th>Último Preço</th>
                                    <th>Preço atual</th>
                                    <th>Frete</th>
                                    <th>Distância</th>
                                    <th>Total (com impostos)</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cotacoesHistorico.map((produto) => (
                                    <tr key={produto.id}>
                                        <td>{produto.codigoInterno}</td>
                                        <td><b>{produto.nome}</b></td>
                                        <td>{produto.fornecedor}</td>
                                        <td>{produto.local}</td>
                                        <td>{formatarPreco(produto.ultimoPreco)}</td>
                                        <td>{formatarPreco(produto.custoAtual)}</td>
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