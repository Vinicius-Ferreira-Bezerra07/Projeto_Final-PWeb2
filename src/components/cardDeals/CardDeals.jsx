import { Link } from 'react-router-dom'
import './CardDeals.css'

export default function CardDeals({ deals }) {

    return (
            <div className="cardDeals">
                <Link className="link" to={`/infoGames/${deals.gameID}`}>
                    <h1 className='titleGame'> {deals.title} </h1>
                    <img className='thumbGame' src={deals.thumb}/>
                </Link>
                <p>Nota Meta Critic: {deals.metacriticScore}</p>
                <p>Pontuação da Oferta: {deals.dealRating}</p>
                <p>Preço da Oferta: ${deals.salePrice}</p>
                <p>Preço normal: ${deals.normalPrice}</p>
            </div>
        // 
    )
}