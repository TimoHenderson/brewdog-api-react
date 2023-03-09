import React,{useState,useEffect} from "react";
import BeersLinks from "../components/BeersLinks";
import BeerList from "../components/BeerList";
import Header from "../components/Header";
import "./BeersContainer.css"

function BeersContainer(){
    const [allBeers, setAllBeers] = useState([]);
    const [favBeers, setFavBeers] = useState([]);
    const [beersToDisplay, setBeersToDisplay] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);
    
    
    useEffect(()=>{
        getBeers();
    },[]);

    useEffect(()=>{
        setBeersToDisplay(allBeers);
    },[allBeers]);

    async function getBeers(){
        const response = await fetch("https://api.punkapi.com/v2/beers");
        const allBeers = await response.json();
        setAllBeers(allBeers);
    }

    function selectBeer(beer){
        setSelectedBeer(beer);
    }

    function deselectBeer(){
        setSelectedBeer(null);
    }

    function viewAllBeers() {
        setBeersToDisplay(allBeers);
    }

    function viewFavBeers() {
        setBeersToDisplay(favBeers);
    }

    function likeBeer(beer){
        if(favBeers.includes(beer)){
            const newFavBeers = [...favBeers];
            const index = newFavBeers.indexOf(beer);
            newFavBeers.splice(index,1);
            setFavBeers(newFavBeers);
        } else{
            const newFavBeers = [...favBeers,beer];
            setFavBeers(newFavBeers);
        }
        
    }

    return(
        <div className="beersContainer">
            <p>BeersContainer</p>
            <Header />
            <BeersLinks viewAllBeers={viewAllBeers} viewFavBeers={viewFavBeers}/>
            <BeerList beers={beersToDisplay} selectedBeer={selectedBeer} selectBeer={selectBeer} deselectBeer={deselectBeer} likeBeer={likeBeer} />
        </div>
    );
}
export default BeersContainer; 