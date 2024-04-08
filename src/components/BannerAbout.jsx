import React, { useState } from "react";
import { Image, Modal, Carousel } from "react-bootstrap";
import banner from "../assets/img/oficina1.png";
import ButtonGetWhitelsted from "./ButtonGetWhitelsted";

import card1 from "../assets/img/a1.jpg";
import card2 from "../assets/img/a2.jpg";
import card3 from "../assets/img/a3.jpg";
import card4 from "../assets/img/a4.jpg";
import card5 from "../assets/img/a5.jpg";
import card6 from "../assets/img/a6.jpg";
import card7 from "../assets/img/a7.jpg";
import card8 from "../assets/img/a8.jpg";
import card9 from "../assets/img/a9.jpg";
import card10 from "../assets/img/a10.jpg";

export default function BannerAbout() {
  // Estado para controlar la visibilidad del modal
  const [show, setShow] = useState(false);

  // Funciones para abrir y cerrar el modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="my-5 d-flex justify-content-between ">
          <div
            className="col-lg-6 mx-3"
            onClick={handleShow}
            style={{ cursor: "pointer" }}
          >
            <Image
              className="bannerImage"
              src={banner}
              alt="banner-about"
              fluid
            />
          </div>
          <div className="col-lg-6 mx-auto my-auto text-dark">
            <h6
              className="py-4"
              style={{ fontWeight: "bold", fontSize: "26px" }}
            >
              CONOCE NUESTRA AGENCIA
            </h6>
            <p style={{ fontSize: "10px" }}>
              En el corazón de Abanilla, Murcia, Paztour Agency se erige como tu
              aliado confiable para explorar el mundo. Con un equipo apasionado
              y conocedor, estamos comprometidos a brindarte experiencias de
              viaje inolvidables. Desde la planificación meticulosa hasta la
              atención personalizada, nos esforzamos por hacer de cada viaje una
              aventura única y emocionante. Visítanos en nuestra sede y déjanos
              ser tu puerta de entrada a un mundo de descubrimientos y
              maravillas.
            </p>
            <ButtonGetWhitelsted />
          </div>
        </div>
      </div>

      {/* Modal que contiene el carrusel de imágenes */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Galería</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={card1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={card2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={card3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={card4}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={card5}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={card6}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={card7}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={card8}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={card9}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={card10}
                alt="Fourth slide"
              />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
}
