import React from "react";
import ReactPlayer from "react-player";
import ButtonGetWhitelsted from "./ButtonGetWhitelsted";

export default function VideoCollections() {
  return (
    <div className="container my-5 py-5">
      <div className="my-4">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=wcdxsCMgpyw"
          playing={false}
          controls={true}
          width="100%"
          height="600px"
        />
      </div>
      <div className="mt-5 mb-2 d-lg-none d-block">
        <ButtonGetWhitelsted />
      </div>
    </div>
  );
}
