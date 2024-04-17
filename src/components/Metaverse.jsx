import { Image } from "react-bootstrap";
import metaverse from "../assets/img/a1.jpg";
import cieloLimite from "../assets/img/cielolimite.png";

export default function Metaverse() {
  return (
    <div className="container">
      <div className="row">
        <div className="my-5 py-5 d-flex justify-content-between ">
          <div className="col-lg-6 mx-3">
            <Image
              src={cieloLimite}
              alt="banner-about"
              className="h-100"
              fluid
            />
          </div>
          <div className="col-lg-6 mx-3">
            <Image src={metaverse} alt="banner-about" className="h-100" fluid />
          </div>
        </div>
      </div>
    </div>
  );
}
