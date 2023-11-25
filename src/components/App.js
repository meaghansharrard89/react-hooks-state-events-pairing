import React, { useEffect, useState } from "react";
import video from "../data/video.js";
import Video from "./Video";
import VideoViews from "./VideoViews";
import VideoTitle from "./VideoTitle";
import Buttons from "./Buttons";
import Comments from "./Comments";

function App() {
  const [newVideo, setVideoDisplay] = useState(null)

  useEffect(() => {
    setVideoDisplay(video);
  }, []);

  //ensures the "Loading" message is displayed when newVideo is null
  if (!newVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Video video={newVideo.embedUrl} />
      <VideoTitle title={newVideo.title} />
      <VideoViews views={newVideo.views} createdAt={newVideo.createdAt} />
      <Buttons upvotes={newVideo.upvotes} downvotes={newVideo.downvotes} />
      <Comments comments={newVideo.comments} />
    </div>
  );
}

export default App;
