import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import ListDeals from "../pages/ListDeals"
import { InfoGames } from "../pages/InfoGames"

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/listDeals" element={<ListDeals/>}/>
                <Route exact path="/infoGames/:gameID" element={<InfoGames/>}/>
            </Routes>
        </BrowserRouter>
    )
}