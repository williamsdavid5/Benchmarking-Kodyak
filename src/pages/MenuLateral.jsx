import './menulateral.css';
import LogoBranca from '../assets/kodyakLogoBranca.png'

export default function MenuLateral() {
    return (
        <>
            <aside className='janelaMenuLateral'>
                <img src={LogoBranca} alt="" className='logoMenuLateral' />
                <div className='menuLateralLinks'>
                    <div className='itemLink'>
                        <a href="">Início</a>
                    </div>
                    <div className='itemLink'>
                        <a href="">Cotações Solicitadas</a>
                    </div>
                    <div className='itemLink'>
                        <a href="">Produtos e Fornecedores</a>
                    </div>
                    <div className='itemLink'>
                        <a href="">Dashboard</a>
                    </div>
                </div>
            </aside>
        </>
    )
}