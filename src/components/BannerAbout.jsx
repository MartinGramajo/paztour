import React from "react";
import { Image } from "react-bootstrap";
import banner from "../assets/img/oficina1.png";
import ButtonGetWhitelsted from "./ButtonGetWhitelsted";

export default function BannerAbout() {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="my-5 d-flex justify-content-between ">
          <div className="col-lg-6 mx-3">
            <Image src={banner} alt="banner-about" fluid />
          </div>
          <div className="col-lg-6  mx-auto my-auto text-dark">
            <h6
              className="py-4"
              style={{ fontWeight: "bold", fontSize: "26px" }}
            >
              CONOCE NUESTRA AGENCIA
            </h6>
            <p style={{ fontSize: "10px" }}>
              Lorem ipsum dolor sit amet. Eum illo ducimus est amet voluptatem a
              incidunt officia sit inventore galisum sed fugit omnis non impedit
              veritatis. Aut temporibus veritatis ut iste quia et voluptatem
              molestias nam ullam explicabo est expedita eligendi. Et eius sint
              aut dolorem galisum et quidem galisum qui optio vitae aut
              architecto voluptatibus est error animi et debitis voluptatibus.
              Est aspernatur facilis ut molestiae Quis ab aspernatur error qui
              repellendus accusantium ea perferendis necessitatibus qui dolorem
              suscipit et dolor neque.
            </p>
            <ButtonGetWhitelsted />
          </div>
        </div>
      </div>
    </div>
  );
}
