export function CardGameSelect({ info, gameSelect }){

    // console.log(info);
    // console.log(gameSelect);

    return(
        <div>
            <h1>{info.title}</h1>
            <img src={info.thumb}/>
        </div>
    )
}