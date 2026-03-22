import MenuLateral from "./MenuLateral"
import { Outlet } from "react-router-dom";
import './inicio.css';

export default function Index() {
    return (
        <>
            <main className="mainInicio">
                <MenuLateral></MenuLateral>
                <div className="principalInicio">
                    <Outlet></Outlet>
                </div>
            </main>
        </>
    )
}