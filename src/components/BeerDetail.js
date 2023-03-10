import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import "./BeerDetail.css";
import LikeButton from "./LikeButton";

function BeerDetail({ beer, deselectBeer, isFav, likeBeer }) {

    const uniqueMaltNames = removeDuplicates(beer.ingredients.malt);
    const uniqueHopNames = removeDuplicates(beer.ingredients.hops);

    function removeDuplicates(myArray) {
        return myArray.reduce((uniqueElements, element) => {
            if (!uniqueElements.includes(element.name)) {
                uniqueElements.push(element.name);
            }
            return uniqueElements;
        }, []).join(", ");
    }

    return (
        <div className="beerDetailContainer">
            <LikeButton beer={beer} isFav={isFav} likeBeer={likeBeer} />
            <button className="likeRow xMark" onClick={() => deselectBeer()} >
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div onClick={() => deselectBeer()} className="beerDetails">
                <div>
                    <img src={beer.image_url} alt="" />
                </div>
                <div>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <h3>{beer.abv}% abv</h3>
                    <p>{beer.description}</p>
                    <h4>Enjoy With</h4>
                    <p>{beer.food_pairing.join(", ")}</p>
                    <div className="ingredients">
                        <h4>Malts</h4>
                        <p>{uniqueMaltNames}</p>
                        <h4>Hops</h4>
                        <p>{uniqueHopNames}</p>
                        <h4>Yeast</h4>
                        <p>{beer.ingredients.yeast}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}




export default BeerDetail; 