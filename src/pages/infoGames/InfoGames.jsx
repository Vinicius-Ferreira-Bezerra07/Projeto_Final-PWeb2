import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getGameID } from "../../service/RequestDeals"

export function InfoGames(props){
    const { gameID } = useParams()
    const [gameSelectSteam, setGameSelectSteam] = useState([])

    useEffect(() => {
        getGameID(gameID)
            .then(response => setGameSelectSteam(response))
            .catch(error => console.error(error))
    },[])

    console.log(gameSelectSteam);

    return(
        <div className="infogame">
            <h1>teste</h1>
        </div>
    )
}