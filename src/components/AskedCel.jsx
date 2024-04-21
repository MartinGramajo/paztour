import React from "react";
import { Image } from "react-bootstrap";
import cieloLimite from "../assets/img/horariosatencion.png";

export default function AskedCel() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="my-5 ">
            <div className="mx-3">
              <Image
                className="h-100"
                src={cieloLimite}
                alt="banner-about"
                fluid
              />
            </div>
            <div className=" mx-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.1385980453456!2d-1.0414942!3d38.2066788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd639114d72c04cb%3A0xfe3710a5443e2ba!2sPaztour%20Agency%20turismo%20y%20formacion!5e0!3m2!1ses-419!2sar!4v1711841045143!5m2!1ses-419!2sar"
                className="w-100"
                height="450"
                style={{ border: "0px" }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="mapa"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
