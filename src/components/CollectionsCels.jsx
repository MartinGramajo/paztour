import React from "react";
import ButtonGetWhitelsted from "./ButtonGetWhitelsted";
import SwiperCollectionsCarsCel from "./SwiperCollectionsCarsCel";
import { Image } from "react-bootstrap";
import titulo from "../assets/img/titulo-collections.png";

export default function CollectionsCels() {
  return (
    <div>
      <div className="container my-5 mb-4">
        <div className="d-flex justify-content-between mb-4">
          <div>
            <div className="">
              <h1 className="text-white mb-3">Net_Hub by </h1>
              <Image
                className="mb-3 w-75"
                src={titulo}
                alt="titulo collections"
                fluid
              />
            </div>
            <p className="text-white">
              Inspired by 70's classics mixed with the cyberpunk universe, our
              first drop in partnership <br /> with netcars offers 999 unique
              NFTs so you can run our classic races through the metaverse.
            </p>
          </div>
        </div>
      </div>
      <SwiperCollectionsCarsCel />
      <div className="my-5 d-flex align-items-center container">
        <ButtonGetWhitelsted />
      </div>
    </div>
  );
}
