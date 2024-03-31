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
            Lorem ipsum dolor sit amet. Est odio dolore est sunt laboriosam aut
            quae aliquid ut adipisci explicabo et assumenda laboriosam ea natus
            optio. Nam adipisci dolor et nisi vitae aut impedit deserunt. Et
            quaerat quod et magnam veniam est sequi assumenda non inventore
            dolorum.
          </p>
        </div>
      </div>
      <SwiperGenesisCars />
    </div>
  );
}
