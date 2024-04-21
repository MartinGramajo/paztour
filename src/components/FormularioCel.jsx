import React from "react";
import { Image } from "react-bootstrap";
import cieloLimite from "../assets/img/movil.png";
import FormContactCel from "./FormContactCel";

export default function FormularioCel() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="my-5 ">
            <div className="col-lg-6 mx-3">
              <Image className="" src={cieloLimite} alt="banner-about" fluid />
            </div>
            <div className="col-lg-6 mx-3">
              <FormContactCel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
