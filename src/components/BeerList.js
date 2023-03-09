import React from "react";
import Beer from "./Beer";

function BeerList({beers, likeBeer}) {
    const beerElements = beers.map((beer) => {
       return <Beer key={beer.id} beer={beer}/>
    }); 
    return(
        <div>
            <p>BeerList</p>
            {beerElements}
        </div>
    );
}

export default BeerList;