import React from "react";
import "./Beer.css"
function Beer({beer,likeBeer, selectBeer}){
    function handleClick(event){
        selectBeer(beer);
    }
    return(
        <div  className="beerCard">
            <div onClick={handleClick}>
                <img src={beer.image_url} alt="beer" />
                <h3>{beer.name}</h3>
                <p>{beer.abv}%</p>
            </div>
            <button onClick={() => likeBeer(beer)}>Like</button>
        </div>
    )
}

export default Beer;