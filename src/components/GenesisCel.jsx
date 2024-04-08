import React from "react";
import SwiperGenesisCarsCel from "./SwiperGenesisCarsCel";

export default function GenesisCel() {
  return (
    <div>
      <div className="container mt-5 mb-4">
        <div className="d-flex justify-content-between mb-4">
          <div>
            <h1 className="text-white mb-4" style={{ fontWeight: "bold" }}>
              CONOCE NUESTROS DESTINOS{" "}
            </h1>
            <p className="text-white">
              ¡Descubre el mundo con Paztour Agency! Sumérgete en aventuras
              inolvidables mientras exploras destinos exóticos, culturas
              fascinantes y paisajes impresionantes. Desde las playas
              paradisíacas del Caribe hasta las majestuosas montañas de los
              Andes, nuestros expertos en viajes te guiarán en la experiencia de
              tu vida. ¡Únete a nosotros y haz realidad tus sueños de viaje!
            </p>
          </div>
        </div>
      </div>
      <SwiperGenesisCarsCel />
    </div>
  );
}
