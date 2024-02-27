import axios from "axios";

const api = axios.create({BaseURLDeals:"https://www.cheapshark.com/api/1.0"})

export function getDeals(upperPrice){
    console.log("Teste4");
    const teste = api.get(`/deals?storeID=1&upperPrice=${upperPrice}`).then(response => response.data.results)

    console.log(teste);
}