import React from "react";
import { Image } from "react-bootstrap";
import banner from "../assets/img/director.jpg";

export default function CrewCel() {
  return (
    <div className="my-5 " id="crewcel">
      <div className="text-center text-white">
        <h1 className="pt-4" style={{ fontSize: "14px", fontWeight: "bold" }}>
          QUIENES SOMOS
        </h1>
      </div>
      <div>
        <div className="container ">
          <div className="row">
            <div className="my-5 ">
              <div className="text-center">
                <Image
                  className="w-100"
                  src={banner}
                  alt="banner-about"
                  fluid
                />
              </div>
              <div className="text-white  mb-2 mt-4">
                <p style={{ fontSize: "17px" }}>
                  Nuestro equipo dirigido por Remedios Sebastián Riquilme,
                  figura destacada en la industria del turismo en Abanilla,
                  junto a diferentes profesionales, estan capacitados y
                  dedicados a hacer realidad tus sueños de viajar. Desde
                  planificar itinerarios personalizados hasta resolver cualquier
                  consulta con prontitud y eficiencia, estamos aquí para
                  brindarte una experiencia de viaje excepcional. Con un enfoque
                  centrado en el cliente y una pasión por explorar el mundo, nos
                  esforzamos por superar tus expectativas en cada paso del
                  camino. ¡Confía en nosotros para convertir tus viajes en
                  memorias inolvidables! En Paztour, no solo nos dedicamos a
                  ofrecer experiencias de viaje excepcionales, sino que también
                  nos comprometemos a brindar servicios de formación y
                  contribuir positivamente a la comunidad, para conocer mas
                  acerca de nuestros CURSOS de capacitación y nuestro SERVICIO a
                  la comunidad, no dudes en ponerte en contacto con PAZTOUR
                  AGENCY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
