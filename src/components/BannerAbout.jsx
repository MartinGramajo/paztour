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
              En el corazón de Abanilla, Murcia, Paztour Agency se erige como tu
              aliado confiable para explorar el mundo. Con un equipo apasionado
              y conocedor, estamos comprometidos a brindarte experiencias de
              viaje inolvidables. Desde la planificación meticulosa hasta la
              atención personalizada, nos esforzamos por hacer de cada viaje una
              aventura única y emocionante. Visítanos en nuestra sede y déjanos
              ser tu puerta de entrada a un mundo de descubrimientos y
              maravillas.
            </p>
            <ButtonGetWhitelsted />
          </div>
        </div>
      </div>
    </div>
  );
}
