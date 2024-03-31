import React from "react";
import { Image } from "react-bootstrap";
import timeline from "../assets/img/timeline.png";


export default function Roadmap() {
    return (
        <div className="text-center text-white container py-5" id="roadmap">
            <h1 className="mb-4">Roadmap</h1>
            <p className="tamaño-medio">
                Our main goal at Garage Hub is to put together the highest
                quality
                <br /> standards of the classic automotive industry with the
                latest VR, AR and <br />
                Blockchain technology. As a result, we aim to create
                professional digital <br />
                vehicles that users are pleased to own, collect and
            </p>
            <Image className="my-5 py-4"  src={timeline} alt="timeline" fluid />
        </div>
    );
}
