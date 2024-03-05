import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getGameID } from "../../service/RequestDeals"
import { CardGameSelect } from "../../components/CardGameSelect/CardGameSelect"
import { getStores } from "../../service/RequestDeals"
import { ClipLoader } from "react-spinners"
import { CardStores } from "../../components/CardStores/CardStores"
import { CardRelatedGames } from "../../components/CardRelatedGames/CardRelatedGames"
import "./infoGames.css"

export function InfoGames(props){
    const { gameID } = useParams()
    const [info, setInfo] = useState()
    const [cheapestPrice, setCheapestPrice] = useState()
    const [stores, setStores] = useState([])
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

            getStores()
                .then(response => setStores(response))
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
                    {gameDeals.map((deals) => (
                        <CardStores className="altDeals" key={deals.storeID} deals={deals} stores={stores}/>
                    ))}
                    <CardGameSelect info={info} gameSelect={gameSelect}/>
                    <CardRelatedGames/>
                </>
                : <ClipLoader/>}
        </div>
    )
}