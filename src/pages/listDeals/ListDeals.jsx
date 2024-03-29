import { useEffect, useState } from "react"
import { getDeals } from "../../service/RequestDeals"
import { ClipLoader } from "react-spinners"
import CardDeals from "../../components/cardDeals/CardDeals"
import "./listDeals.css"
import { NavBar } from "../../components/NavBar/NavBar"

export default function ListDeals() {
    const [upperPrice, setUpperPrice] = useState(15)
    const [games, setGames] = useState([])

    const requestDeals = () => {
        getDeals(upperPrice)
            .then(response => setGames(response))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        requestDeals()
    }, [])

    return (
        <div className="listDeals">
            <NavBar/>
            <div className="listD">
                {games.length > 0 ?
                games.map((deals) => (
                    <CardDeals key={games.steamAppID} deals={deals}/>
                ))
                : <ClipLoader />}
            </div>
        </div>
    )
}