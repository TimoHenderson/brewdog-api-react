import React from "react";
import "./BeerDetail.css";

function BeerDetail({beer, deselectBeer}) {
    return(
        <div onClick={()=>deselectBeer()} className="beerDetailContainer">
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>{beer.description}</p>
            <img src={beer.image_url} alt="" />
            <h3>{beer.abv}</h3>
            <p>{beer.food_pairing}</p>
        </div>
    );
}



export default BeerDetail; 