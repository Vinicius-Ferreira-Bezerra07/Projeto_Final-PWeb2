import './CardDeals.css'

export default function CardDeals({ deals }) {

    return (
        // <link className="link" to={`/infoGames/${deals.gameID}`}>
            <div className="cardDeals">
                <h1>{deals.title}</h1>
                <img src={deals.thumb}/>
                <p>Nota Meta Critic: {deals.metacriticScore}</p>
                <p>Pntuação da Oferta: {deals.dealRating}</p>
                <p>Preço da Oferta: ${deals.salePrice}</p>
                <p>Preço normal: ${deals.normalPrice}</p>
            </div>
        // </link>
    )
}