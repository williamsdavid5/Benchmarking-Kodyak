import './menulateral.css';
import LogoBranca from '../assets/kodyakLogoBranca.png'
import { Link } from "react-router-dom";

export default function MenuLateral() {
    return (
        <>
            <aside className='janelaMenuLateral'>
                <div className='auxLogo'>
                    <img src={LogoBranca} alt="" className='logoMenuLateral' />
                </div>
                <div className='menuLateralLinks'>
                    <Link to="/">Início</Link>
                    <Link to="/cotacoes">Cotações solicitadas</Link>
                    <Link to="/produtos-fornecedores">Produtos e Fornecedores</Link>
                    <Link to="/dashboard">Dashboard</Link>

                </div>
            </aside>
        </>
    )
}