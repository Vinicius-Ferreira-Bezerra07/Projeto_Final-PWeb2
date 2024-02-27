import axios from "axios";

const api = axios.create({
    baseURL: "https://www.cheapshark.com/api/1.0"
})

export default async function getDeals(upperPrice) {
    return await api.get(`/deals?storeID=1&upperPrice=${upperPrice}`).then(response => response.data)
}