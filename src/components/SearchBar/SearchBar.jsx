import { FaSearch } from "react-icons/fa";
import { getGamesByName } from "../../service/RequestDeals";

export function SearchBar(){
    
    const searchGame = (search) => {
        const games = getGamesByName(search)
            .then(response => res)
    }

    return (
        <>
            <imput>
                <FaSearch onClick={searchGame(e.target.value)}/>
            </imput>
        </>
    )
}