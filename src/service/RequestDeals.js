import axios from "axios";

const api = axios.create({
    baseURL: "https://www.cheapshark.com/api/1.0"
})

export async function getDeals(upperPrice) {
    return await api.get(`/deals?storeID=1&upperPrice=${upperPrice}`).then(response => response.data)
}

export async function getGameID(id) {
    return await api.get(`/games?id=${id}`).then(response => response.data)
}

export async function getStores() {
    return await api.get(`stores`).then(response => response.data)
}

export async function getGamesByName(name){
    return await api.get(`games?title=${name}`).then(response => response.data)
}