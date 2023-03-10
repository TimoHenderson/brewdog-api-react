import React, { useState, useEffect } from "react";
import BeersLinks from "../components/BeersLinks";
import BeerList from "../components/BeerList";

import "./BeersContainer.css"

function BeersContainer() {
    const [allBeers, setAllBeers] = useState([]);
    const [favBeers, setFavBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);
    const [viewingFavBeers, setViewingFavBeers] = useState(false);
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const [filters, setFilters] = useState({ below5: true, above5: true, bottle: true, keg: true });

    useEffect(() => {
        async function manageGetBeers() {
            for (let i = 1; i < 6; i++) {
                const newBeers = await getBeers(`https://api.punkapi.com/v2/beers?page=${i}&per_page=60`)
                setAllBeers((allBeers) => [...allBeers, ...newBeers]);
            }
        }
        manageGetBeers();
    }, []);

    async function getBeers(url) {
        const response = await fetch(url);
        const allBeers = await response.json();
        return allBeers;
    }

    function scrollToPrev() {
        window.scrollTo({
            top: prevScrollPosition,
            left: 0,
            behavior: 'auto'
        });
    }

    function scrollToTop() {
        setPrevScrollPosition(window.scrollY);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    }

    function selectBeer(beer) {
        setSelectedBeer(beer);
        scrollToTop();
    }

    function deselectBeer() {
        setSelectedBeer(null);
        scrollToPrev();
    }

    function viewAllBeers() {
        setViewingFavBeers(false);
        deselectBeer();
    }

    function viewFavBeers() {
        setViewingFavBeers(true);
        deselectBeer();
        scrollToTop();
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

    function getFilteredBeers() {

    }

    return (
        <div className="beersContainer">
            <header>
                <h1>BREWDOG BEERS</h1>
                <BeersLinks viewAllBeers={viewAllBeers} viewFavBeers={viewFavBeers} />
            </header>
            <BeerList beers={viewingFavBeers ? favBeers : allBeers} selectedBeer={selectedBeer} selectBeer={selectBeer} deselectBeer={deselectBeer} likeBeer={likeBeer} favBeers={favBeers} />
        </div>
    );
}
export default BeersContainer; 