import React from "react";
import { Figure } from "react-bootstrap";
import image1 from "../assets/img/director.jpg";

export default function Crew() {
  return (
    <div className="container my-5 py-5" id="crew">
      <div className="text-center text-white">
        <h6 className="py-4" style={{ fontWeight: "bold", fontSize: "22px" }}>
          QUIENES SOMOS
        </h6>
      </div>
      <div className="d-flex justify-content-around my-5">
        <div className="mx-2">
          <Figure>
            <Figure.Image
              width={352}
              style={{ height: "400px", objectFit: "cover" }}
              alt="171x180"
              src={image1}
            />
            <Figure.Caption>
              <span className="color-secundary">
                Remedios Sebastian Riquelme
              </span>{" "}
              <br /> <span> Directora General </span>
            </Figure.Caption>
          </Figure>
        </div>
        <div className="mx-2">
          <Figure>
            <Figure.Image
              width={352}
              style={{ height: "400px", objectFit: "cover" }}
              alt="171x180"
              src={image1}
            />
            <Figure.Caption>
              <span className="color-secundary">
                Remedios Sebastian Riquelme
              </span>{" "}
              <br /> <span> Directora General </span>
            </Figure.Caption>
          </Figure>
        </div>
        <div className="mx-2">
          <Figure>
            <Figure.Image
              width={352}
              style={{ height: "400px", objectFit: "cover" }}
              alt="171x180"
              src={image1}
            />
            <Figure.Caption>
              <span className="color-secundary">
                Remedios Sebastian Riquelme
              </span>{" "}
              <br /> <span> Directora General </span>
            </Figure.Caption>
          </Figure>
        </div>
        <div className="mx-2">
          <Figure>
            <Figure.Image
              width={352}
              style={{ height: "400px", objectFit: "cover" }}
              alt="171x180"
              src={image1}
            />
            <Figure.Caption>
              <span className="color-secundary">
                Remedios Sebastian Riquelme
              </span>{" "}
              <br /> <span> Directora General </span>
            </Figure.Caption>
          </Figure>
        </div>
      </div>
    </div>
  );
}
