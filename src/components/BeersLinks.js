import React from "react";
import './BeerLinks.css'

function BeersLinks({ viewAllBeers, viewFavBeers, toggleFilter, filters, viewingFavBeers, updateSearchText }) {


    return (
        <div className="Links">
            <button className={filters.keg ? "filterOn" : "filterOff"} onClick={() => toggleFilter("keg")}>Kegs</button>
            <button className={filters.bottle ? "filterOn" : "filterOff"} onClick={() => toggleFilter("bottle")}>Bottles</button>
            <button className={filters.above5 ? "filterOn" : "filterOff"} onClick={() => toggleFilter("above5")}>{">5%abv"}</button>
            <button className={filters.below5 ? "filterOn" : "filterOff"} onClick={() => toggleFilter("below5")}>{"<5%abv"}</button>
            <button className={!viewingFavBeers ? "filterOn" : "filterOff"} onClick={() => viewAllBeers()}>View All</button>
            <button className={viewingFavBeers ? "filterOn" : "filterOff"} onClick={() => viewFavBeers()}>View Fav</button>
            <form>
                <input onChange={updateSearchText} type="search" placeholder="Search" />
            </form>
        </div>
    );
}

export default BeersLinks;