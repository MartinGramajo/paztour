import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Card } from "react-bootstrap";

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

const cardsData = [
  {
    id: 1,
    img: card1,
    title: "titulo",
    description:
      "Lorem ipsum dolor sit amet. Est odio dolore est sunt laboriosam aut quae aliquid ut adipisci explicabo et assumenda laboriosam ea natus optio. Nam adipisci dolor et nisi vitae aut impedit deserunt. Et quaerat quod et magnam veniam est sequi assumenda non inventore dolorum.",
    link: "/",
  },
  {
    id: 2,
    img: card2,
    title: "titulo",
    description:
      "Lorem ipsum dolor sit amet. Est odio dolore est sunt laboriosam aut quae aliquid ut adipisci explicabo et assumenda laboriosam ea natus optio. Nam adipisci dolor et nisi vitae aut impedit deserunt. Et quaerat quod et magnam veniam est sequi assumenda non inventore dolorum.",
    link: "/",
  },
  {
    id: 3,
    img: card3,
    title: "titulo",
    description:
      "Lorem ipsum dolor sit amet. Est odio dolore est sunt laboriosam aut quae aliquid ut adipisci explicabo et assumenda laboriosam ea natus optio. Nam adipisci dolor et nisi vitae aut impedit deserunt. Et quaerat quod et magnam veniam est sequi assumenda non inventore dolorum.",
    link: "/",
  },
  {
    id: 4,
    img: card4,
    title: "titulo",
    description:
      "Lorem ipsum dolor sit amet. Est odio dolore est sunt laboriosam aut quae aliquid ut adipisci explicabo et assumenda laboriosam ea natus optio. Nam adipisci dolor et nisi vitae aut impedit deserunt. Et quaerat quod et magnam veniam est sequi assumenda non inventore dolorum.",
    link: "/",
  },

  {
    id: 5,
    img: card5,
    title: "titulo",
    description:
      "Lorem ipsum dolor sit amet. Est odio dolore est sunt laboriosam aut quae aliquid ut adipisci explicabo et assumenda laboriosam ea natus optio. Nam adipisci dolor et nisi vitae aut impedit deserunt. Et quaerat quod et magnam veniam est sequi assumenda non inventore dolorum.",
    link: "/",
  },
  {
    id: 6,
    img: card6,
    title: "titulo",
    description:
      "Lorem ipsum dolor sit amet. Est odio dolore est sunt laboriosam aut quae aliquid ut adipisci explicabo et assumenda laboriosam ea natus optio. Nam adipisci dolor et nisi vitae aut impedit deserunt. Et quaerat quod et magnam veniam est sequi assumenda non inventore dolorum.",
    link: "/",
  },

  {
    id: 7,
    img: card7,
    title: "titulo",
    description:
      "Lorem ipsum dolor sit amet. Est odio dolore est sunt laboriosam aut quae aliquid ut adipisci explicabo et assumenda laboriosam ea natus optio. Nam adipisci dolor et nisi vitae aut impedit deserunt. Et quaerat quod et magnam veniam est sequi assumenda non inventore dolorum.",
    link: "/",
  },
  {
    id: 8,
    img: card8,
    title: "titulo",
    description:
      "Lorem ipsum dolor sit amet. Est odio dolore est sunt laboriosam aut quae aliquid ut adipisci explicabo et assumenda laboriosam ea natus optio. Nam adipisci dolor et nisi vitae aut impedit deserunt. Et quaerat quod et magnam veniam est sequi assumenda non inventore dolorum.",
    link: "/",
  },

  {
    id: 9,
    img: card9,
    title: "titulo",
    description:
      "Lorem ipsum dolor sit amet. Est odio dolore est sunt laboriosam aut quae aliquid ut adipisci explicabo et assumenda laboriosam ea natus optio. Nam adipisci dolor et nisi vitae aut impedit deserunt. Et quaerat quod et magnam veniam est sequi assumenda non inventore dolorum.",
    link: "/",
  },
  {
    id: 10,
    img: card10,
    title: "titulo",
    description:
      "Lorem ipsum dolor sit amet. Est odio dolore est sunt laboriosam aut quae aliquid ut adipisci explicabo et assumenda laboriosam ea natus optio. Nam adipisci dolor et nisi vitae aut impedit deserunt. Et quaerat quod et magnam veniam est sequi assumenda non inventore dolorum.",
    link: "/",
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
                style={{ height: "200px", objectFit: "cover" }}
                variant="top"
                src={card.img}
              />
              <Card.Body className="mx-2 mt-2">
                <Card.Title className="text-white">{card.title}</Card.Title>
                <h6 className="text-white" style={{ fontSize: "14px" }}>
                  {card.description}
                </h6>
              </Card.Body>
            </Card>
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
