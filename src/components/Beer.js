import React from "react";
import "./Beer.css"
import LikeButton from "./LikeButton";


function Beer({ beer, likeBeer, selectBeer, isFav }) {
    function handleClick() {
        selectBeer(beer);
    }
    return (
        <div className="beerCard">


            <span className="beerInfo" onClick={handleClick}>
                <img src={beer.image_url} alt="beer" />
                <h3>{beer.name}</h3>
                <p>{beer.abv}%</p>
            </span>
            <LikeButton likeBeer={likeBeer} isFav={isFav} beer={beer} />
        </div>
    )
}

export default Beer;

