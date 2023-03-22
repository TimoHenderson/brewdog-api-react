import React from "react";
import Beer from "./Beer";
import "./BeerList.css";
import BeerDetail from "./BeerDetail";

function BeerList({ beers, filters, likeBeer, selectedBeer, selectBeer, deselectBeer, favBeers, searchText }) {

    const filteredBeers = beers.filter((beer) => {
        if (!filters.keg && beer.image_url === "https://images.punkapi.com/v2/keg.png") return false;
        if (!filters.bottle && beer.image_url !== "https://images.punkapi.com/v2/keg.png") return false;
        if (!filters.above5 && beer.abv >= 5) return false;
        if (!filters.below5 && beer.abv < 5) return false;
        if (!beer.name.toLowerCase().includes(searchText.toLowerCase())) return false;
        return true;
    });

    const beerElements = filteredBeers.map((beer) => {
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