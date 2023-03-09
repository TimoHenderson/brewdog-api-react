import React from "react";
import './BeerLinks.css'

function BeersLinks({ viewAllBeers, viewFavBeers }) {
    return (
        <div className="Links">
            <button onClick={() => viewAllBeers()}>View All</button>
            <button onClick={() => viewFavBeers()}>View Fav</button>
        </div>
    );
}

export default BeersLinks;