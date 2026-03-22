import './menulateral.css';
import LogoBranca from '../assets/kodyakLogoBranca.png'
import { NavLink } from "react-router-dom";
export default function MenuLateral() {
    return (
        <>
            <aside className='janelaMenuLateral'>
                <div className='auxLogo'>
                    <img src={LogoBranca} alt="" className='logoMenuLateral' />
                </div>
                <div className='menuLateralLinks'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "ativo" : ""}>Início</NavLink>
                    <NavLink to="/cotacoes" className={({ isActive }) => isActive ? "ativo" : ""}>Cotações solicitadas</NavLink>
                    <NavLink to="/produtos-fornecedores" className={({ isActive }) => isActive ? "ativo" : ""}>Produtos e Fornecedores</NavLink>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "ativo" : ""}>Dashboard</NavLink>
                </div>
            </aside>
        </>
    )
}