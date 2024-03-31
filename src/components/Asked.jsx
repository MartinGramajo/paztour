import React from "react";

export default function Asked() {
  return (
    <div className="container">
      <div className="row">
        <div className="my-5 py-5 d-flex justify-content-between ">
          <div className="col-lg-6  mx-auto my-auto text-dark">
            <h6
              className="py-4"
              style={{ fontWeight: "bold", fontSize: "26px" }}
            >
              DONDE PODES ENCONTRARNOS
            </h6>
          </div>
          <div className="col-lg-6 mx-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.1385980453456!2d-1.0414942!3d38.2066788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd639114d72c04cb%3A0xfe3710a5443e2ba!2sPaztour%20Agency%20turismo%20y%20formacion!5e0!3m2!1ses-419!2sar!4v1711841045143!5m2!1ses-419!2sar"
              className="mapa"
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
  );
}
