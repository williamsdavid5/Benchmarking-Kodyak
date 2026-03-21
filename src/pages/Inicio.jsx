import MenuLateral from "./MenuLateral"
import './inicio.css';

export default function Inicio() {
    return (
        <>
            <main className="mainInicio">
                <MenuLateral></MenuLateral>
                <div className="principalInicio">
                    <p>principal</p>
                </div>
            </main>
        </>
    )
}