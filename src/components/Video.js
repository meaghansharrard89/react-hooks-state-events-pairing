import React from "react";

function Video ( { video } ) {

  //once NewVideo has a value, the iframe component will be rendered
  //prevents error messages by only attempting to access the props of newVideo once it has a valid value
  
    return (
        <>
    {video && (
          <iframe
            width="919"
            height="525"
            src={video}
            frameBorder="0"
            allowFullScreen
          />
    )}
      </>
    )
}

export default Video;