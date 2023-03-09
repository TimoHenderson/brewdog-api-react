import React from "react";
import Beer from "./Beer";
import "./BeerList.css";
import BeerDetail from "./BeerDetail";

function BeerList({beers, likeBeer, selectedBeer, selectBeer, deselectBeer}) {
    const beerElements = beers.map((beer) => {
       return <Beer key={beer.id} beer={beer} selectBeer={selectBeer} likeBeer={likeBeer}/>
    }); 
    return(
        <>
        {selectedBeer && <BeerDetail beer={selectedBeer} deselectBeer={deselectBeer} likeBeer={likeBeer}/>}
        {!selectedBeer && <div className="beerList">    
            {beerElements}
        </div>}
        </>
    );
}

export default BeerList;