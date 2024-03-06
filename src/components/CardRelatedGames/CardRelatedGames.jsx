import { useEffect, useState } from "react";
import { getGamesByName } from "../../service/RequestDeals";
import { UnidCardRelated } from "../UnidCardRelated/UnidCardRelated";
import { ClipLoader } from "react-spinners";

export function CardRelatedGames({ title }){
    const [games, setGames] = useState([])
    
    useEffect(()=>{
        getGamesByName(title)
            .then(response => setGames(response))
    },[])

    console.log(games);
    
    return(
        <div>
            { games.length > 0 ?
                games.map((x) => (
                    <UnidCardRelated key={games.gameID} game={x}/>
                ))
            :<ClipLoader/>}
        </div>
    )
}