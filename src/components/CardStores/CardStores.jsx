import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners"
import "./CardStores.css"

export function CardStores({deals, stores}){
    const [store,setStore] = useState()
    
    useEffect(()=>{
        stores.map(x => {
            if(x.storeID == deals.storeID){
                setStore(x)
            }
        })
    },[])

    // console.log(stores)
    // console.log(deals);
    // console.log(store);

    return(
        <div className="altDeals">
            {store != undefined ? 
                <>
                    <img className="banner" src={`https://www.cheapshark.com${store?.images.banner}`}/>
                    {/* <img className="logo" src={`https://www.cheapshark.com${store?.images.logo}`}/> */}
                    <img className="icon" src={`https://www.cheapshark.com${store?.images.icon}`}/>
                    <p>Preço: {deals.price}</p>
                </>
                : <ClipLoader/>
            }
        </div>
    )
}