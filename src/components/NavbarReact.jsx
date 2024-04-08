import React from "react";
import ButtonGetWhitelsted from "./ButtonGetWhitelsted";
import brand from "../assets/img/logo-paztour.png";
import { Image, Nav } from "react-bootstrap";
import face from "../assets/img/face.png";
import insta from "../assets/img/insta.png";

export default function NavbarReact() {
  // Estilo para replicar el botón en los Nav.Link
  const navLinkStyle = {
    backgroundColor: "#185975", // Asumiendo un color dorado como ejemplo
    color: "white",
    padding: "5px ",
    borderRadius: "5px",
    fontWeight: "bold",
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center navbar-height">
        <div>
          <Nav>
            <Nav.Link href="#paztour">
              <p className="mb-0 nav-link-custom">PAZTOUR</p>
            </Nav.Link>
            <Nav.Link href="#oficinas">
              <p className="mb-0 nav-link-custom">OFICINAS</p>
            </Nav.Link>
            <Nav.Link href="#contacto">
              <p className="mb-0 nav-link-custom">CONTACTO</p>
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
