import { CircleLoader } from "react-spinners";

export function UnidCardRelated({ game }){
    // console.log(game)
    return(
        <div className="">
            {game.steamAppID != null ?
                <>
                    <h1>{game.external}</h1>
                    <img src={game.thumb}/>,
                </>
            : <></>}
        </div>
    )
}