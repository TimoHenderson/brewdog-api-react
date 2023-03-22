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
    const [filters, setFilters] = useState({ below5: true, above5: false, bottle: true, keg: true });
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        async function manageGetBeers() {
            let allBeers = [];
            for (let i = 1; i < 6; i++) {
                const newBeers = await getBeers(`https://api.punkapi.com/v2/beers?page=${i}&per_page=60`)
                allBeers = [...allBeers, ...newBeers];
            }
            setAllBeers(allBeers);
        }
        manageGetBeers();
    }, []);

    async function getBeers(url) {
        const response = await fetch(url);
        const allBeers = await response.json();
        return allBeers;
    }

    function updateSearchText(e) {
        setSearchText(e.target.value);
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
        scrollToTop();
        setSelectedBeer(beer);

    }

    function deselectBeer() {
        scrollToPrev();
        setSelectedBeer(null);

    }

    function viewAllBeers() {
        setViewingFavBeers(false);
        selectedBeer ? deselectBeer() : scrollToPrev();
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

    function toggleFilter(key) {
        const newFilters = { ...filters };
        newFilters[key] = !newFilters[key];
        setFilters(newFilters);
    }

    return (
        <div className="beersContainer">
            <header>
                <h1>BREWDOG BEERS</h1>
                <BeersLinks viewAllBeers={viewAllBeers} viewFavBeers={viewFavBeers} toggleFilter={toggleFilter} filters={filters} viewingFavBeers={viewingFavBeers} updateSearchText={updateSearchText} />
            </header>
            <BeerList beers={viewingFavBeers ? favBeers : allBeers} filters={filters} searchText={searchText} selectedBeer={selectedBeer} selectBeer={selectBeer} deselectBeer={deselectBeer} likeBeer={likeBeer} favBeers={favBeers} />
        </div>
    );
}
export default BeersContainer; 