import React, { useState } from "react";

function Buttons( { upvotes, downvotes } ) {
    const [likeButton, setLikeButton] = useState(upvotes);
    const [dislikeButton, setDislikeButton] = useState(downvotes);

    function increaseLikes() {
        setLikeButton((likes) => likes + 1);
    }

    function decreaseLikes() {
        setDislikeButton((likes) => likes - 1);
    }

    return (
        <>
        <button onClick={increaseLikes} value={likeButton} >{likeButton} 👍</button>
        <button onClick={decreaseLikes} value={dislikeButton} >{dislikeButton} 👎</button>
        </>
    )
}

export default Buttons;