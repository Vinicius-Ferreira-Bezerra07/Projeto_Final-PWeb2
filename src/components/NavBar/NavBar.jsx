import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";

export function NavBar(){
    return (
        <>
            <Link to={"/"}>
                <h1>Home</h1>
            </Link>
            <Link to={"/listDeals"}>
                <h1>Ofertas Steam</h1>
            </Link>
            <SearchBar/>
        </>
    )
}