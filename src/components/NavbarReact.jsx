import React from "react";
import ButtonGetWhitelsted from "./ButtonGetWhitelsted";
import brand from "../assets/img/logo-paztour.png";
import { Image, Nav } from "react-bootstrap";
import face from "../assets/img/face.png";
import insta from "../assets/img/insta.png";

export default function NavbarReact() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center navbar-height">
        <div>
          <Nav>
            <Nav.Link className="" href="#paztour">
              <p className="mb-0 text-dark" style={{ fontWeight: "bold" }}>
                PAZTOUR
              </p>
            </Nav.Link>
            <Nav.Link className="" href="#oficinas">
              <p className="mb-0 text-dark" style={{ fontWeight: "bold" }}>
                OFICINAS{" "}
              </p>
            </Nav.Link>
            <Nav.Link className="" href="#contacto">
              <p className="mb-0 text-dark" style={{ fontWeight: "bold" }}>
                CONTACTO
              </p>
            </Nav.Link>
          </Nav>
        </div>
        <div>
          <img className="img-fluid logo-nav" src={brand} alt="logo" />
        </div>

        <section className="d-flex">
          <ButtonGetWhitelsted />
          <div className="mx-2 py-2">
            <a
              href="https://www.instagram.com/paztouragency/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Image className="iconos-nav" src={insta} alt="instagram" fluid />
            </a>
          </div>
          <div className="mx-2 py-2">
            <a
              href="https://www.facebook.com/profile.php?id=61551128212875"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Image className="iconos-nav" src={face} alt="face" fluid />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
