import React,{useState,useEffect} from "react";
import BeersLinks from "../components/BeersLinks";
import BeerList from "../components/BeerList";
import Header from "../components/Header";

function BeersContainer(){
    const [allBeers, setAllBeers] = useState([]);
    const [favBeers, setFavBeers] = useState([]);
    const [showAllBeers, setShowAllBeers] = useState(true);

    useEffect(()=>{
        getBeers();
    },[]);

    async function getBeers(){
        const response = await fetch("https://api.punkapi.com/v2/beers");
        const allBeers = await response.json();
        setAllBeers(allBeers);
    }

    return(
        <div>
            <p>BeersContainer</p>
            <Header />
            <BeersLinks />
            <BeerList beers={allBeers} />
        </div>
    );
}
export default BeersContainer; 