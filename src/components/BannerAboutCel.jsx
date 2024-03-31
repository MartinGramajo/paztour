import React from "react";
import { Image } from "react-bootstrap";
import banner from "../assets/img/oficina1.png";
import ButtonGetWhitelsted from "./ButtonGetWhitelsted";

export default function BannerAboutCel() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="my-5 ">
            <div className="text-center">
              <Image className="w-100" src={banner} alt="banner-about" fluid />
            </div>
            <div className="text-dark my-2">
              <h1
                className="pt-4"
                style={{ fontSize: "16px", fontWeight: "bold" }}
              >
                CONOCE NUESTRA AGENCIA
              </h1>
              <p>
                Lorem ipsum dolor sit amet. Eum illo ducimus est amet voluptatem
                a incidunt officia sit inventore galisum sed fugit omnis non
                impedit veritatis. Aut temporibus veritatis ut iste quia et
                voluptatem molestias nam ullam explicabo est expedita eligendi.
                Et eius sint aut dolorem galisum et quidem galisum qui optio
                vitae aut architecto voluptatibus est error animi et debitis
                voluptatibus. Est aspernatur facilis ut molestiae Quis ab
                aspernatur error qui repellendus accusantium ea perferendis
                necessitatibus qui dolorem suscipit et dolor neque.
              </p>
              <ButtonGetWhitelsted />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
