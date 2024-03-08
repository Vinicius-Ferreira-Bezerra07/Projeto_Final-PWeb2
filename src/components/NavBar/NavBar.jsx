import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import "./navBar.css"

export function NavBar(){
    return (
        <div className="NavBar">
            <Link className="link" to={"/"}>
                <h1>Home</h1>
            </Link>
            <Link className="link" to={"/listDeals"}>
                <h1>Ofertas Steam</h1>
            </Link>
            <SearchBar/>
        </div>
    )
}