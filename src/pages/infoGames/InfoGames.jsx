import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getGameID } from "../../service/RequestDeals"

export function InfoGames(props){
    const { gameID } = useParams()
    const [gameSelect, setGameSelect] = useState([])

    useEffect(() => {
        getGameID(gameID)
            .then(response => gameSelect(response))
            .catch(error => console.error(error))
    },[])


    return(
        <div>
            <h1>teste</h1>
        </div>
    )
}