import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";

import card1 from "../assets/img/casapintada.png";
import card2 from "../assets/img/capilla.png";
import card3 from "../assets/img/casaencomienda.png";
import card4 from "../assets/img/ayuntamiento.png";

const cardsData = [
  {
    id: 1,
    img: card1,
    title: "Casa pintada",
  },
  {
    id: 2,
    img: card2,
    title: "Capilla de la Santa Cruz",
  },
  {
    id: 3,
    img: card3,
    title: "Casa de la Encomienda Centro Cultural",
  },
  {
    id: 4,
    img: card4,
    title: "Ayuntamiento de Abanilla",
  },
];
export default function SwiperGenesisCarsCel() {
  return (
    <div className="pb-4">
      <div className="d-none d-sm-block">
        <Swiper slidesPerView={2.5} className="mySwiper">
          {cardsData.map((card, index) => (
            <SwiperSlide key={index} className="d-flex">
              <Card className="card-cars mx-auto">
                <Card.Img
                  style={{ height: "300px", objectFit: "cover" }}
                  variant="top"
                  src={card.img}
                />
                <Card.Body className="mx-2 mt-2">
                  <Card.Title className="text-white">{card.title}</Card.Title>
                  <h6 className="text-white">{card.description}</h6>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="d-sm-none">
        <Swiper slidesPerView={1.5} className="mySwiper">
          {cardsData.map((card, index) => (
            <SwiperSlide key={index} className="d-flex">
              <Card className="card-cars mx-auto">
                <Card.Img
                  style={{ height: "200px", objectFit: "cover" }}
                  variant="top"
                  src={card.img}
                />
                <Card.Body className="mx-2 mt-2">
                  <Card.Title className="text-white">{card.title}</Card.Title>
                  <h6 className="text-white" style={{ fontSize: "12px" }}>
                    {card.description}
                  </h6>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
