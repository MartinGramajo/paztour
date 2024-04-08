import React from "react";
import SwiperGenesisCars from "./SwiperGenesisCars";

export default function Genesis() {
  return (
    <div className="container my-5 py-5">
      <div className="d-flex justify-content-between mb-5">
        <div>
          <h6
            className="py-4 text-white"
            style={{ fontWeight: "bold", fontSize: "26px" }}
          >
            CONOCE NUESTROS DESTINOS{" "}
          </h6>
          <p className="text-white">
            ¡Descubre el mundo con Paztour Agency! Sumérgete en aventuras
            inolvidables mientras exploras destinos exóticos, culturas
            fascinantes y paisajes impresionantes. Desde las playas paradisíacas
            del Caribe hasta las majestuosas montañas de los Andes, nuestros
            expertos en viajes te guiarán en la experiencia de tu vida. <br />
            ¡Únete a nosotros y haz realidad tus sueños de viaje!
          </p>
        </div>
      </div>
      <SwiperGenesisCars />
    </div>
  );
}
