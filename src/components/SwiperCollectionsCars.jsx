import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Card } from "react-bootstrap";

import rarecar1 from "../assets/img/rare-car1.png";
import rarecar2 from "../assets/img/rare-car2.png";
import rarecar3 from "../assets/img/rare-car3.png";
import rarecar4 from "../assets/img/rare-car4.png";

export default function SwiperCollectionsCars() {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper px-2"
        >
            <SwiperSlide className="d-flex">
                <Card className="card-cars mx-auto">
                    <Card.Img
                        className="image-card"
                        variant="top"
                        src={rarecar1}
                    />
                    <Card.Body className="mx-2 mt-2 ">
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
                <Card className="card-cars mx-auto">
                    <Card.Img
                        className="image-card"
                        variant="top"
                        src={rarecar2}
                    />
                    <Card.Body className="mx-2 mt-2 ">
                        <div className="d-flex justify-content-between mb-2">
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
                <Card className="card-cars mx-auto">
                    <Card.Img
                        className="image-card"
                        variant="top"
                        src={rarecar3}
                    />
                    <Card.Body className="mx-2 mt-2 ">
                        <div className="d-flex justify-content-between mb-2">
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
                <Card className="card-cars mx-auto">
                    <Card.Img
                        className="image-card"
                        variant="top"
                        src={rarecar4}
                    />
                    <Card.Body className="mx-2 mt-2 ">
                        <div className="d-flex justify-content-between mb-2">
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
                        src={rarecar1}
                    />
                    <Card.Body className="mx-2 mt-2 ">
                        <div className="d-flex justify-content-between mb-2">
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
                <Card className="card-cars mx-auto">
                    <Card.Img
                        className="image-card"
                        variant="top"
                        src={rarecar2}
                    />
                    <Card.Body className="mx-2 mt-2 ">
                        <div className="d-flex justify-content-between mb-2">
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
                <Card className="card-cars mx-auto">
                    <Card.Img
                        className="image-card"
                        variant="top"
                        src={rarecar3}
                    />
                    <Card.Body className="mx-2 mt-2 ">
                        <div className="d-flex justify-content-between mb-2">
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
                <Card className="card-cars mx-auto">
                    <Card.Img
                        className="image-card"
                        variant="top"
                        src={rarecar4}
                    />
                    <Card.Body className="mx-2 mt-2 ">
                        <div className="d-flex justify-content-between mb-2">
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
    );
}
