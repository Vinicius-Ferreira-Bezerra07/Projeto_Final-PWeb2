import axios from "axios";

const api = axios.create({
    baseURL: "https://www.cheapshark.com/api/1.0"
})

export async function getDeals(upperPrice) {
    return await api.get(`/deals?storeID=1&upperPrice=${upperPrice}`).then(response => response.data)
}

export async function getGameName(name) {
    return await api.get(`/games?title=${name}`).then(response => response.data)
}