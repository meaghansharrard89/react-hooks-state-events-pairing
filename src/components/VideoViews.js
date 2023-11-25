import React from "react";

function VideoViews( { views, createdAt } ) {
    return (
        <h3>{views} views | Uploaded {createdAt}</h3>
    )
}

export default VideoViews;