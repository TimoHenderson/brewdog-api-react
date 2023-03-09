import React from "react";
import "./BeerDetail.css";

function BeerDetail({beer, deselectBeer}) {

    const uniqueMaltNames = removeDuplicates(beer.ingredients.malt);
    const uniqueHopsNames = removeDuplicates(beer.ingredients.hops);
    
    const maltNodes = uniqueMaltNames.map((malt,index)=>{
        return <li key={index}>{malt}</li>
    })
    const hopNodes = uniqueHopsNames.map((hop,index)=>{
        return <li key={index}>{hop}</li>
    })
   
    function removeDuplicates(myArray){
        return myArray.reduce((uniqueElements, element) => {
            if (!uniqueElements.includes(element.name)) {
            uniqueElements.push(element.name);
            }
            return uniqueElements;
        }, []);
    }

    return(
        <div onClick={()=>deselectBeer()} className="beerDetailContainer">
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>{beer.description}</p>
            <img src={beer.image_url} alt="" />
            <h3>{beer.abv}</h3>
            <h4>Malts</h4>
            <ul>{maltNodes}</ul>
            <h4>Hops</h4>
            <ul>{hopNodes}</ul>
            <h4>Yeast</h4>
            <p>{beer.ingredients.yeast}</p>
            <p>{beer.food_pairing}</p>
        </div>
    );
}




export default BeerDetail; 