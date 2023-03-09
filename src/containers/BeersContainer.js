import React, { useState, useEffect } from "react";
import BeersLinks from "../components/BeersLinks";
import BeerList from "../components/BeerList";

import "./BeersContainer.css"

function BeersContainer() {
    const [allBeers, setAllBeers] = useState([]);
    const [favBeers, setFavBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);
    const [viewingFavBeers, setViewingFavBeers] = useState(false);

    useEffect(() => {
        async function manageGetBeers() {
            const page1List = await getBeers("https://api.punkapi.com/v2/beers?page=1&per_page=60")
            const page2List = await getBeers("https://api.punkapi.com/v2/beers?page=2&per_page=60")
            const page3List = await getBeers("https://api.punkapi.com/v2/beers?page=3&per_page=60")
            const page4List = await getBeers("https://api.punkapi.com/v2/beers?page=4&per_page=60")
            const page5List = await getBeers("https://api.punkapi.com/v2/beers?page=5&per_page=60")
            const allBeersList = page1List.concat(page2List, page3List, page4List, page5List)
            setAllBeers(allBeersList);
        }
        manageGetBeers();
    }, []);

    async function getBeers(url) {
        const response = await fetch(url);
        const allBeers = await response.json();
        return allBeers;
    }

    function selectBeer(beer) {
        setSelectedBeer(beer);
    }

    function deselectBeer() {
        setSelectedBeer(null);
    }

    function viewAllBeers() {
        setViewingFavBeers(false);
    }

    function viewFavBeers() {
        setViewingFavBeers(true);
    }

    function likeBeer(beer) {
        if (favBeers.includes(beer)) {
            const newFavBeers = [...favBeers];
            const index = newFavBeers.indexOf(beer);
            newFavBeers.splice(index, 1);
            setFavBeers(newFavBeers);
        } else {
            const newFavBeers = [...favBeers, beer];
            setFavBeers(newFavBeers);
        }
    }

    return (
        <div className="beersContainer">
            <h1>BREWDOG BEERS</h1>
            <BeersLinks viewAllBeers={viewAllBeers} viewFavBeers={viewFavBeers} />
            <BeerList beers={viewingFavBeers ? favBeers : allBeers} selectedBeer={selectedBeer} selectBeer={selectBeer} deselectBeer={deselectBeer} likeBeer={likeBeer} favBeers={favBeers} />
        </div>
    );
}
export default BeersContainer; 