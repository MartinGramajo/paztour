import React from "react";
import ButtonGetWhitelsted from "./ButtonGetWhitelsted";
import brand2 from "../assets/img/logo-paztour.png";
import { Nav, Navbar, Image } from "react-bootstrap";
import face from "../assets/img/face.png";
import insta from "../assets/img/insta.png";

export default function NavbarReactCel() {
  return (
    <Navbar className="container py-0" expand="lg" variant="dark">
      <Navbar.Brand href="/">
        <img className="logo-nav img-fluid" src={brand2} alt="logo-brand" />
      </Navbar.Brand>
      <Navbar.Toggle className="" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="" id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link className="text-end" href="#paztour">
            <p className="mb-0 text-dark" style={{ fontWeight: "bold" }}>
              PAZTOUR
            </p>
          </Nav.Link>
          <Nav.Link className="text-end" href="#oficinas">
            <p className="mb-0 text-dark" style={{ fontWeight: "bold" }}>
              OFICINAS{" "}
            </p>
          </Nav.Link>
          <Nav.Link className="text-end" href="#contacto">
            <p className="mb-0 text-dark" style={{ fontWeight: "bold" }}>
              CONTACTO
            </p>
          </Nav.Link>
          <div className="my-3 text-end">
            <div className="mx-2 d-flex justify-content-end">
              <a
                className="mx-4"
                href="https://www.instagram.com/paztouragency/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image
                  className="iconos-nav"
                  src={insta}
                  alt="instagram"
                  fluid
                />
              </a>
              <a
                className=""
                href="https://www.facebook.com/profile.php?id=61551128212875"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image className="iconos-nav" src={face} alt="face" fluid />
              </a>
            </div>
            <div className="py-4">
              <ButtonGetWhitelsted />
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
