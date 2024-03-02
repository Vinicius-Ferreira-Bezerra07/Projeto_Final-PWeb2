import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getGameID } from "../../service/RequestDeals"
import { CardGameSelect } from "../../components/CardGameSelect/CardGameSelect"
import CardDeals from "../../components/cardDeals/CardDeals"
import { ClipLoader } from "react-spinners"

export function InfoGames(props){
    const { gameID } = useParams()
<<<<<<< HEAD
    const [gameDeals, setGameDeals] = useState([])
    const [gameSelect, setGameSelect] = useState([])
=======
    const [gameSelectSteam, setGameSelectSteam] = useState([])
>>>>>>> 55d81c4a56cc6f9620f4c883caa123172f970c11

    const getGame = () => {
        getGameID(gameID)
<<<<<<< HEAD
            .then(response => response.map((deals) => {
                if(deals.storeID == 1){
                    setGameSelect(deals)
                }
                setGameDeals(response)
            }))
=======
            .then(response => setGameSelectSteam(response))
>>>>>>> 55d81c4a56cc6f9620f4c883caa123172f970c11
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

<<<<<<< HEAD
    // console.log("1", gameDeals)
    // console.log("2", gameSelect);

    return(
        <div>
            {CardDeals.length > 0 ?
                <CardGameSelect/>
                : <ClipLoader/>}
=======
    console.log(gameSelectSteam);

    return(
        <div className="infogame">
            <h1>teste</h1>
>>>>>>> 55d81c4a56cc6f9620f4c883caa123172f970c11
        </div>
    )
}