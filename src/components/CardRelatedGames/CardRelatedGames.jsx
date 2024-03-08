import { useEffect, useState } from "react";
import { getGamesByName } from "../../service/RequestDeals";
import { UnidCardRelated } from "../UnidCardRelated/UnidCardRelated";
import { ClipLoader } from "react-spinners";
import "./cardRelatedGames.css"

export function CardRelatedGames({ title }){
    const [games, setGames] = useState([])
    
    useEffect(()=>{
        const meio = title.length/2.5
        const halfName = title.substring(0,meio)
        console.log(halfName);
        
        getGamesByName(halfName)
            .then(response => setGames(response))
    },[])

    
    return(
        <div className="relatedGames">
            { games.length > 0 ?
                games.map((x) => (
                    <UnidCardRelated key={games.gameID} game={x}/>
                ))
            :<ClipLoader/>}
        </div>
    )
}