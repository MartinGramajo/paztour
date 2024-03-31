import React from "react";
import ButtonGetWhitelsted from "./ButtonGetWhitelsted";
import SwiperCollectionsCars from "./SwiperCollectionsCars";
import { Image } from "react-bootstrap";
import titulo from "../assets/img/titulo-collections.png";


export default function Collections() {
    return (
        <div className="container my-5 py-5">
            <div className="d-flex justify-content-between mb-5">
                <div>
                    <div className="d-flex">
                        <h1 className="text-white mb-4">Net_Hub by </h1>
                        <Image className="h-100 mt-3 ms-4" src={titulo} alt="titulo collections" fluid />
                    </div>
                    <p className="text-white">
                        Inspired by 70's classics mixed with the cyberpunk
                        universe, our first drop in partnership <br /> with
                        netcars offers 999 unique NFTs so you can run our
                        classic races through the metaverse.
                    </p>
                </div>
                <div className="d-flex align-items-center">
                    <ButtonGetWhitelsted />
                </div>
            </div>
            <SwiperCollectionsCars />
        </div>
    );
}
