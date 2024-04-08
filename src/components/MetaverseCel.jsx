import React from "react";
import { Image } from "react-bootstrap";
import metaverse from "../assets/img/a1.jpg";
import cieloLimite from "../assets/img/cielolimite.png";

export default function MetaverseCel() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="my-5 ">
            <div className="col-lg-6 mx-3">
              <Image
                className="img-fluid same-height"
                src={cieloLimite}
                alt="banner-about"
              />
            </div>
            <div className="col-lg-6 mx-3">
              <Image
                className="img-fluid same-height"
                src={metaverse}
                alt="banner-about"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
