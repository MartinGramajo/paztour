import React from "react";
import ReactPlayer from "react-player";
import ButtonGetWhitelsted from "./ButtonGetWhitelsted";

export default function VideoCollections() {
  return (
    <div className="container my-5 py-5">
      <h6
        className="py-4 text-white"
        style={{ fontWeight: "bold", fontSize: "26px" }}
      >
        AFTERMOVIE DEL EVENTO
      </h6>
      <div className="my-4">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=7PIji8OubXU"
          playing={false}
          muted
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
