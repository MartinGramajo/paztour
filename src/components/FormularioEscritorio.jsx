import { Image } from "react-bootstrap";

import cieloLimite from "../assets/img/movil.png";
import FormContact from "./FormContact";

export default function FormularioEscritorio() {
  return (
    <div className="container">
      <div className="row">
        <div className="my-5 py-5 d-flex justify-content-between ">
          <div className="col-lg-6 mx-3">
            <Image
              src={cieloLimite}
              alt="banner-about"
              className="img-fluid same-height"
            />
          </div>
          <div className="col-lg-6 mx-3">
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  );
}
