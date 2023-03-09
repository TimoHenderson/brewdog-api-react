import React from "react";
import Beer from "./Beer";
import "./BeerList.css";
import BeerDetail from "./BeerDetail";

function BeerList({ beers, likeBeer, selectedBeer, selectBeer, deselectBeer, favBeers }) {
    const beerElements = beers.map((beer) => {
        const isFav = favBeers.includes(beer);
        return <Beer key={beer.id} beer={beer} selectBeer={selectBeer} likeBeer={likeBeer} isFav={isFav} />
    });
    return (
        <>
            {beers === [] && <h1>Beers Loading!</h1>}
            {selectedBeer && <BeerDetail beer={selectedBeer} deselectBeer={deselectBeer} likeBeer={likeBeer} isFav={favBeers.includes(selectedBeer)} />}
            {!selectedBeer && <div className="beerList">
                {beerElements}
            </div>}
        </>
    );
}

export default BeerList;