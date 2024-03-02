import { useEffect, useState } from "react"
import { getStores } from "../../service/RequestDeals"

export function CardStores({deals}){
    const [stores, setStores] = useState([])

    useEffect(()=>{
        getStores()
            .then(response => setStores(response))
    },[])



    console.log(stores)
    console.log(deals);

    return(
        <div >
            {deals.map(x => {
                
            })}
        </div>
    )
}