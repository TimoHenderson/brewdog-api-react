import React from "react";
import "./Beer.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

function Beer({beer,likeBeer, selectBeer, isFav}){
    function handleClick(){
        selectBeer(beer);
    }
            return (
        <div  className="beerCard">
            <div className="likeRow">
                <button onClick={() => likeBeer(beer)}>
                    <FontAwesomeIcon className={isFav ? "red" : "grey"} icon={faHeart}/>
                </button>
            </div>
            <div onClick={handleClick}>
                <img src={beer.image_url} alt="beer" />
                <h3>{beer.name}</h3>
                <p>{beer.abv}%</p>
            </div>
        </div>
    )
}

export default Beer;

