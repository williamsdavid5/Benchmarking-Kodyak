import { useState } from 'react';
import './fecharCotacao.css'

export default function FecharCotacao({ setJanelaCotacoes, cotacaoSelecionada }) {
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState(null);

    const listaFornecedores = [
        {
            id: 1,
            nomeFornecedor: "NutriAnimal Brasil",
            local: "Cuiabá - MT",
            distancia: 450,
            frete: 320.00,
            preco: 189.90,
            impostos: 45.58
        },
        {
            id: 2,
            nomeFornecedor: "AgroNutri Alimentos",
            local: "Curitiba - PR",
            distancia: 280,
            frete: 185.50,
            preco: 98.50,
            impostos: 23.64
        },
        {
            id: 3,
            nomeFornecedor: "Equus Nutrition",
            local: "Campinas - SP",
            distancia: 120,
            frete: 95.00,
            preco: 245.00,
            impostos: 58.80
        },
        {
            id: 4,
            nomeFornecedor: "VetNutri Plus",
            local: "Porto Alegre - RS",
            distancia: 380,
            frete: 245.00,
            preco: 156.75,
            impostos: 37.62
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
            <div className="backgroundFecharCotacao">
                <main className="janelaFecharCotacao">
                    <h1>Compra {cotacaoSelecionada.codigoInterno}</h1>
                    <h3 className='tituloFonteFina'>{cotacaoSelecionada.nome}</h3>
                    <div className='centralizada'>
                        <h2 className='tituloFonteFina'>Escolha um fornecedor</h2>
                    </div>
                    <section className='fornecedoresCards'>
                        {listaFornecedores.map((fornecedor, i) => {
                            return (
                                <>
                                    <div className={`cardFornecedor card${i} ${fornecedorSelecionado === fornecedor.id ? 'selecionado' : ''}`} key={i} onClick={() => setFornecedorSelecionado(fornecedor.id)}>
                                        <h2 className='tituloFonteFina'>{fornecedor.nomeFornecedor}</h2>
                                        <p>{fornecedor.local}</p>
                                        {i == 0 && (<span className='spanUltimoFornecedor'><p>Último fornecedor</p></span>)}
                                        {i == 3 && (<span className='spanSugestaoIA'><p>Sugestão de IA</p></span>)}
                                        {fornecedorSelecionado === fornecedor.id && (<span className='spanSelecionado'><p>Selecionado</p></span>)}
                                        <hr />
                                        <p><b>Preço do produto: {formatarPreco(fornecedor.preco)}</b></p>
                                        <p>Frete: {formatarPreco(fornecedor.frete)}</p>
                                        <p>Distância: {fornecedor.distancia} Km</p>
                                        <p>Impostos: {formatarPreco(fornecedor.impostos)}</p>
                                        <div className='auxCardValor'>
                                            <p>Total</p>
                                            <h1>{formatarPreco(fornecedor.preco + fornecedor.frete + fornecedor.impostos)}</h1>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </section>
                    <div className='centralizada'>
                        <h2 className='tituloFonteFina'>Você pagou <b>{formatarPreco(cotacaoSelecionada.ultimoPreco)}</b> na última compra</h2>
                    </div>
                    <div className='auxBotoesJanela'>
                        <button
                            onClick={() => setJanelaCotacoes(false)}
                            disabled={fornecedorSelecionado == null}
                            className={`${fornecedorSelecionado == null ? 'botaoDesabilitado' : ''}`}
                        >
                            Enviar para avaliação
                        </button>
                        <button onClick={() => setJanelaCotacoes(false)}>
                            Cancelar
                        </button>
                    </div>

                </main>
            </div>
        </>
    )
}