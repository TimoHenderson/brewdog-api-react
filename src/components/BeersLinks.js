import React from "react";


function BeersLinks({viewAllBeers, viewFavBeers} ) {
    return(
        <div className="Links">
            <button onClick={() => viewAllBeers()}>View All</button>
            <button onClick={() => viewFavBeers()}>View Fav</button>
        </div>
    );
}

export default BeersLinks;