import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
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

// Función para dividir el arreglo de tarjetas en subarreglos de 4 elementos
const chunkArray = (arr, chunkSize) => {
  let result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

export default function SwiperGenesisCars() {
  // Divide las tarjetas en grupos de 4
  const cardGroups = chunkArray(cardsData, 4);

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper px-2">
      {cardGroups.map((group, index) => (
        <SwiperSlide key={index} className="d-flex">
          {group.map((card, cardIndex) => (
            <Card key={cardIndex} className="card-cars mx-auto">
              <Card.Img
                style={{ height: "300px", objectFit: "cover" }}
                variant="top"
                src={card.img}
              />
              <Card.Body className="mx-2 mt-2">
                <Card.Title className="text-white">{card.title}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
