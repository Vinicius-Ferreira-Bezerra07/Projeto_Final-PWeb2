import { useEffect, useState } from "react"
import { getDeals } from "../service/RequestGames"


export default function ListDeals(){
    const upperPrice = useState(15)
    const [games, setGames] = useState([])

    const requestDeals = () => {
        console.log("Teste2")
        getDeals(upperPrice)
            .then(response => setGames(response))
            .catch(error => console.error(error))

            console.log("Teste3")
    }

    useEffect(()=>{
        console.log("Teste");
        requestDeals()
    },[])

    console.log(games);

    return(
        <div className="listGames">
            <h2>Lista de Ofertas</h2>
        </div>
    )
}