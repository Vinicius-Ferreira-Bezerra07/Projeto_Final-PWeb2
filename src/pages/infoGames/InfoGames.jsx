import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getGameID } from "../../service/RequestDeals"
import { CardGameSelect } from "../../components/CardGameSelect/CardGameSelect"
import CardDeals from "../../components/cardDeals/CardDeals"
import { ClipLoader } from "react-spinners"

export function InfoGames(props){
    const { gameID } = useParams()
    const [gameDeals, setGameDeals] = useState([])
    const [gameSelect, setGameSelect] = useState([])

    const getGame = () => {
        getGameID(gameID)
            .then(response => response.map((deals) => {
                if(deals.storeID == 1){
                    setGameSelect(deals)
                }
                setGameDeals(response)
            }))
            .catch(error => console.error(error))
    }

    // setGameDeals(response)

    // useEffect(() => {
    //     gameDeals.deals.map((x) => {
    //         if (x.storeID == 1) {
    //             setGameSelect(x)
    //             console.log(x);
    //         }
    //     })
    // },[gameDeals])

    useEffect(() => {
        getGame()
    },[])

    // console.log("1", gameDeals)
    // console.log("2", gameSelect);

    return(
        <div>
            {CardDeals.length > 0 ?
                <CardGameSelect/>
                : <ClipLoader/>}
        </div>
    )
}