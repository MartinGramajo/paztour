import React from "react";
import { Image } from "react-bootstrap";
import metaverse from "../assets/img/a1.jpg";

export default function MetaverseCel() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="my-5 ">
            <div className="col-lg-6  mx-auto my-auto text-dark">
              <h1 className="my-5 text-center" style={{ fontWeight: "bold" }}>
                {" "}
                EL CIELO ES EL LÍMITE{" "}
              </h1>
            </div>
            <div className="col-lg-6 mx-3">
              <Image src={metaverse} alt="banner-about" fluid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
