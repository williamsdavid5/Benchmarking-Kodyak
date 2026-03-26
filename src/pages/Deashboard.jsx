import './dashboard.css'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts';


export default function Dashborad() {

    const listaProdutos = [
        { id: 1, nome: "Suplemento Mineral para Bovinos de Corte", vendas: 1245 },
        { id: 2, nome: "Ração Inicial para Frangos de Corte", vendas: 2890 },
        { id: 3, nome: "Suplemento Energético para Equinos Atletas", vendas: 567 },
        { id: 4, nome: "Núcleo Mineral para Ovinos e Caprinos", vendas: 892 },
        { id: 5, nome: "Ração Terminadora para Suínos", vendas: 1432 },
        { id: 6, nome: "Suplemento Proteico para Vacas Leiteiras", vendas: 2103 },
        { id: 7, nome: "Ração de Crescimento para Equinos", vendas: 765 },
        { id: 8, nome: "Premix Vitaminico para Aves Poedeiras", vendas: 1876 },
        { id: 9, nome: "Suplemento para Reprodução de Suínos", vendas: 654 },
        { id: 10, nome: "Ração para Cordeiros em Aleitamento", vendas: 432 },
        { id: 11, nome: "Suplemento para Engorda de Bovinos Confinados", vendas: 1567 },
        { id: 12, nome: "Ração de Manutenção para Cavalos Adultos", vendas: 934 },
        { id: 13, nome: "Suplemento Mineral para Aves em Postura", vendas: 1123 },
        { id: 14, nome: "Ração para Ovinos em Crescimento", vendas: 678 },
        { id: 15, nome: "Concentrado para Suínos em Fase de Creche", vendas: 845 }
    ];


    const dadosFornecedores = [
        { nome: "NutriAnimal Brasil", porcentagem: 40 },
        { nome: "AgroNutri Alimentos", porcentagem: 35 },
        { nome: "Equus Nutrition", porcentagem: 25 }
    ];

    const CORES = ["var(--corDestaque1)", "var(--corDestaque2)", "var(--corDestaque3)"];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        if (cx == null || cy == null || innerRadius == null || outerRadius == null) return null;

        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <main className="mainDashboard">
                <header className="superiorDashboard">
                    {/* <h1>Dashboard</h1> */}
                    <h3>Dashboard</h3>
                    <p>Acompanhe a análise dos dados registrados com feedback visual.</p>
                </header>
                <section className="blocosDashborad">
                    <div className="bloco graficoVendasProdutos">
                        <p><b>Compras por produto</b></p>
                        <ResponsiveContainer width="100%" height='100%'>
                            <BarChart
                                data={listaProdutos}
                                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="nome" hide />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="vendas" fill="var(--corDestaque1)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='bloco graficoFornecedoresPizza'>
                        <p><b>Distribuição de compras entre fornecedores por produto</b></p>
                        <span className='spanMesmaLinha'>
                            <p>Produto: </p>
                            <select name="" id="" className='selectPequeno'>
                                {listaProdutos.map((produto) => {
                                    return (
                                        <option value="">
                                            {produto.nome}
                                        </option>
                                    )
                                })}
                            </select>
                        </span>
                        <ResponsiveContainer width="100%" height='100%'>
                            <PieChart>
                                <Pie
                                    data={dadosFornecedores}
                                    dataKey="porcentagem"
                                    nameKey="nome"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={115}
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                >
                                    {dadosFornecedores.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={CORES[index % CORES.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend
                                    layout="vertical"
                                    align="right"
                                    verticalAlign="middle"
                                >
                                </Legend>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='bloco infoResumida'>
                        <h3>Média por mês</h3>
                        <p><b>Gasto em pedidos:</b> R$ 29.000,00</p>
                        <p><b>Gasto em impostos:</b> R$ 4.350,00</p>
                        <p><b>Gasto em fretes:</b> R$ 6.567,00</p>
                        <p><b>Média de compras: </b>65</p>
                        <hr />
                        <p><b>Mês com mais gastos:</b> 08/2025</p>
                        <p>Total nesse mês:</p>
                        <h1 style={{ color: 'red' }}>R$ 38.592,00</h1>
                    </div>
                    <div className='bloco infoResumida'>
                        <p><b>Total de compras esse mês:</b> 58</p>
                        <p><b>Total gasto esse mês:</b> R$ 18.258,00</p>
                        <hr />
                        <p><b>Diferença de gastos em relação ao mês anterior:</b></p>
                        <h1 style={{ color: 'green' }}>R$ -5.622,00</h1>
                        <p>diferença negativa indica que você gastou menos!</p>
                    </div>
                </section>
            </main>
        </>
    )
}