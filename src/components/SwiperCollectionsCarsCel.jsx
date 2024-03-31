import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";

import rarecar1 from "../assets/img/rare-car1cel.png";
import rarecar2 from "../assets/img/rare-car2cel.png";
import rarecar3 from "../assets/img/rare-car3cel.png";
import rarecar4 from "../assets/img/rare-car4cel.png";

export default function SwiperCollectionsCarsCel() {
    return (
        <div>
            <div className="d-none d-sm-block">
                <Swiper slidesPerView={3.25} className="mySwiper">
                    <SwiperSlide className="d-flex">
                        <Card className="card-cars mx-auto">
                            <Card.Img
                                className="image-card"
                                variant="top"
                                src={rarecar1}
                            />
                            <Card.Body className="m-1 ">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Card.Title className="tamaño-medio peso-bold text-white ">
                                            Porsche 911
                                        </Card.Title>
                                        <Card.Title className="tamaño-medio peso-bold text-white mb-0">
                                            Carrera RS
                                        </Card.Title>
                                    </div>
                                    <Card.Title className="tamaño-medio peso-regular text-white my-auto">
                                        1/30
                                    </Card.Title>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="d-flex">
                        <Card className="card-cars mx-auto">
                            <Card.Img
                                className="image-card"
                                variant="top"
                                src={rarecar2}
                            />
                            <Card.Body className="m-1 ">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Card.Title className="tamaño-medio peso-bold text-white ">
                                            Porsche 911
                                        </Card.Title>
                                        <Card.Title className="tamaño-medio peso-bold text-white mb-0">
                                            Carrera RS
                                        </Card.Title>
                                    </div>
                                    <Card.Title className="tamaño-medio peso-regular text-white my-auto">
                                        1/30
                                    </Card.Title>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="d-flex">
                        <Card className="card-cars mx-auto">
                            <Card.Img
                                className="image-card"
                                variant="top"
                                src={rarecar3}
                            />
                            <Card.Body className="m-1 ">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Card.Title className="tamaño-medio peso-bold text-white ">
                                            Porsche 911
                                        </Card.Title>
                                        <Card.Title className="tamaño-medio peso-bold text-white mb-0">
                                            Carrera RS
                                        </Card.Title>
                                    </div>
                                    <Card.Title className="tamaño-medio peso-regular text-white my-auto">
                                        1/30
                                    </Card.Title>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="d-flex">
                        <Card className="card-cars mx-auto">
                            <Card.Img
                                className="image-card"
                                variant="top"
                                src={rarecar4}
                            />
                            <Card.Body className="m-1 ">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Card.Title className="tamaño-medio peso-bold text-white ">
                                            Porsche 911
                                        </Card.Title>
                                        <Card.Title className="tamaño-medio peso-bold text-white mb-0">
                                            Carrera RS
                                        </Card.Title>
                                    </div>
                                    <Card.Title className="tamaño-medio peso-regular text-white my-auto">
                                        1/30
                                    </Card.Title>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="d-sm-none">
                <Swiper slidesPerView={1.75} className="mySwiper">
                    <SwiperSlide className="d-flex">
                        <Card className="card-cars mx-auto">
                            <Card.Img
                                className="image-card"
                                variant="top"
                                src={rarecar1}
                            />
                            <Card.Body className="m-1 ">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Card.Title className="tamaño-medio peso-bold text-white ">
                                            Porsche 911
                                        </Card.Title>
                                        <Card.Title className="tamaño-medio peso-bold text-white mb-0">
                                            Carrera RS
                                        </Card.Title>
                                    </div>
                                    <Card.Title className="tamaño-medio peso-regular text-white my-auto">
                                        1/30
                                    </Card.Title>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="d-flex">
                        <Card className="card-cars mx-auto">
                            <Card.Img
                                className="image-card"
                                variant="top"
                                src={rarecar2}
                            />
                            <Card.Body className="m-1 ">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Card.Title className="tamaño-medio peso-bold text-white ">
                                            Porsche 911
                                        </Card.Title>
                                        <Card.Title className="tamaño-medio peso-bold text-white mb-0">
                                            Carrera RS
                                        </Card.Title>
                                    </div>
                                    <Card.Title className="tamaño-medio peso-regular text-white my-auto">
                                        1/30
                                    </Card.Title>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="d-flex">
                        <Card className="card-cars mx-auto">
                            <Card.Img
                                className="image-card"
                                variant="top"
                                src={rarecar3}
                            />
                            <Card.Body className="m-1 ">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Card.Title className="tamaño-medio peso-bold text-white ">
                                            Porsche 911
                                        </Card.Title>
                                        <Card.Title className="tamaño-medio peso-bold text-white mb-0">
                                            Carrera RS
                                        </Card.Title>
                                    </div>
                                    <Card.Title className="tamaño-medio peso-regular text-white my-auto">
                                        1/30
                                    </Card.Title>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide className="d-flex">
                        <Card className="card-cars mx-auto">
                            <Card.Img
                                className="image-card"
                                variant="top"
                                src={rarecar4}
                            />
                            <Card.Body className="m-1 ">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Card.Title className="tamaño-medio peso-bold text-white ">
                                            Porsche 911
                                        </Card.Title>
                                        <Card.Title className="tamaño-medio peso-bold text-white mb-0">
                                            Carrera RS
                                        </Card.Title>
                                    </div>
                                    <Card.Title className="tamaño-medio peso-regular text-white my-auto">
                                        1/30
                                    </Card.Title>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
