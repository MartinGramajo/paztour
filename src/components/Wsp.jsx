import { Image } from "react-bootstrap";
import wsp from "../assets/img/wasa.svg";

export default function Wsp() {
  return (
    <div className="d-flex justify-content-center">
      <div className="navbar-bordes">
        <a
          className=""
          href="https://wa.link/ned1t4"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="icono-wsp fixed-bottom ms-auto mb-5 me-4"
            src={wsp}
            alt="wsp"
            fluid
          />
        </a>
      </div>
    </div>
  );
}
