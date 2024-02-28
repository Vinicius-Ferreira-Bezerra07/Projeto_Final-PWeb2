export default function CardDeals({ deals }) {

    return (
        // <link className="link" to={`/infoGames/${deals.gameID}`}>
            <div className="cardDeals">
                <h1>{deals.title}</h1>
                <img src={deals.thumb}/>
            </div>
        // </link>
    )
}