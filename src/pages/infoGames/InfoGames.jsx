import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getGameID } from "../../service/RequestDeals"
import { CardGameSelect } from "../../components/CardGameSelect/CardGameSelect"
import CardDeals from "../../components/cardDeals/CardDeals"
import { ClipLoader } from "react-spinners"
import { CardStores } from "../../components/CardStores/CardStores"
import { CardRelatedGames } from "../../components/CardRelatedGames/CardRelatedGames"

export function InfoGames(props){
    const { gameID } = useParams()
    const [info, setInfo] = useState()
    const [cheapestPrice, setCheapestPrice] = useState()
    const [gameDeals, setGameDeals] = useState([])
    const [gameSelect, setGameSelect] = useState([])
    const [relatedGames, setRelatedGames] = useState([])

    const [gameSelectSteam, setGameSelectSteam] = useState([])

    const getGame = () => {
        getGameID(gameID)
            .then(response => {
                setInfo(response.info)
                setCheapestPrice(response.cheapestPriceEver)
                response.deals.map((deals) => {
                if(deals.storeID == 1){
                    setGameSelect(deals)
                }
                setGameDeals(response.deals)
            })})
            .catch(error => console.error(error))
    }

    useEffect(() => {
        getGame()
    },[])

    // console.log("1", gameDeals)
    // console.log("2", gameSelect);
    // console.log(info);
    // console.log(cheapestPrice);

    return(
        <div>
            {gameDeals.length > 0 ?
                <>
                    <CardStores deals={gameDeals}/>
                    <CardGameSelect info={info} gameSelect={gameSelect}/>
                    <CardRelatedGames/>
                </>
                : <ClipLoader/>}
        </div>
    )
}