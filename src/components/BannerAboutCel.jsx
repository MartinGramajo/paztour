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
                En el corazón de Abanilla, Murcia, Paztour Agency se erige como
                tu aliado confiable para explorar el mundo. Con un equipo
                apasionado y conocedor, estamos comprometidos a brindarte
                experiencias de viaje inolvidables. Desde la planificación
                meticulosa hasta la atención personalizada, nos esforzamos por
                hacer de cada viaje una aventura única y emocionante. Visítanos
                en nuestra sede y déjanos ser tu puerta de entrada a un mundo de
                descubrimientos y maravillas.
              </p>
              <ButtonGetWhitelsted />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
