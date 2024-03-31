import { Image } from "react-bootstrap";
import metaverse from "../assets/img/a1.jpg";

export default function Metaverse() {
  return (
    <div className="container">
      <div className="row">
        <div className="my-5 py-5 d-flex justify-content-between ">
          <div className="col-lg-6  mx-auto my-auto text-dark">
            <h6
              className="py-4"
              style={{ fontWeight: "bold", fontSize: "26px" }}
            >
              {" "}
              EL CIELO ES EL LÍMITE{" "}
            </h6>
          </div>
          <div className="col-lg-6 mx-3">
            <Image src={metaverse} alt="banner-about" fluid />
          </div>
        </div>
      </div>
    </div>
  );
}
