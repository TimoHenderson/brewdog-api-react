import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function LikeButton({ likeBeer, isFav, beer }) {
    return (
        <button className="likeRow" onClick={() => likeBeer(beer)}>
            <FontAwesomeIcon className={isFav ? "red" : "grey"} icon={faHeart} />
        </button>
    );
}

export default LikeButton;