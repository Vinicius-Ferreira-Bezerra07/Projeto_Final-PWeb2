import { Link } from "react-router-dom";
import {NavBar } from "../../components/NavBar/NavBar"
import './home.css'

export default function Home(){

    return (
        <div className="Home">
            <NavBar/>
            <h1>Projeto Final PWeb2.</h1>
            <p>Equipe: Vinicius Ferreira Bezerra</p>
            <p>Jhonatas Willy Lourenço</p>
            <p>API: "https://apidocs.cheapshark.com"</p>

            <Link className="link" to={"/listDeals"}>Ofertas</Link>
        </div>
    )
}