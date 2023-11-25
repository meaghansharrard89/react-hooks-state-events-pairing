import React, { useState } from "react";

function Comments ( { comments } ) {
    const [commentButton, setCommentButton] = useState(true)

    //this will set the commentButton to the opposite whenever clicked
    function hideCommentDisplay(e){
        setCommentButton(!commentButton)
    }

    //you need to add the value of commentButton to the button display
    //if commentButton is true, it will work with the && operator to display the comments. if false, it won't display the comments
    return (
        <div>
            <button onClick={hideCommentDisplay}>{commentButton ? "Hide Comments" : "Show Comments"}</button>
            <h2>{comments.length} Comments</h2>
            {commentButton &&
                comments.map((comment) => (
                    <div key={comment.id}>
                        <h3>{comment.user}</h3>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>
        )
}

export default Comments;