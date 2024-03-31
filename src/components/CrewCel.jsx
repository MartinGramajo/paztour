import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Figure } from "react-bootstrap";
import image1 from "../assets/img/a1.jpg";

export default function CrewCel() {
  return (
    <div className="my-5 " id="crewcel">
      <div className="text-center text-white">
        <h1 className="pt-4" style={{ fontSize: "14px", fontWeight: "bold" }}>
          QUIENES SOMOS
        </h1>
      </div>
      <div className="d-flex justify-content-around my-5 d-none d-sm-block">
        <Swiper spaceBetween={10} slidesPerView={3} className="">
          <SwiperSlide>
            <div>
              <Figure className="ms-4">
                <Figure.Image
                  width={252}
                  height={322}
                  alt="171x180"
                  src={image1}
                />
                <Figure.Caption>
                  <span className="color-secundary">
                    Remedios Sebastian Riquelme
                  </span>{" "}
                  <br /> <span> Directora General </span>
                </Figure.Caption>
              </Figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Figure className="ms-4">
                <Figure.Image
                  width={252}
                  height={322}
                  alt="171x180"
                  src={image1}
                />
                <Figure.Caption>
                  <span className="color-secundary">
                    Remedios Sebastian Riquelme
                  </span>{" "}
                  <br /> <span> Directora General </span>
                </Figure.Caption>
              </Figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Figure className="ms-4">
                <Figure.Image
                  width={252}
                  height={322}
                  alt="171x180"
                  src={image1}
                />
                <Figure.Caption>
                  <span className="color-secundary">
                    Remedios Sebastian Riquelme
                  </span>{" "}
                  <br /> <span> Directora General </span>
                </Figure.Caption>
              </Figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Figure className="ms-4">
                <Figure.Image
                  width={252}
                  height={322}
                  alt="171x180"
                  src={image1}
                />
                <Figure.Caption>
                  <span className="color-secundary">
                    Remedios Sebastian Riquelme
                  </span>{" "}
                  <br /> <span> Directora General </span>
                </Figure.Caption>
              </Figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="d-flex justify-content-around my-5 d-sm-none">
        <Swiper spaceBetween={10} slidesPerView={1.5} className="">
          <SwiperSlide>
            <div>
              <Figure className="ms-4">
                <Figure.Image
                  width={252}
                  height={322}
                  alt="171x180"
                  src={image1}
                />
                <Figure.Caption>
                  <span className="color-secundary">
                    Remedios Sebastian Riquelme
                  </span>{" "}
                  <br /> <span> Directora General </span>
                </Figure.Caption>
              </Figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Figure className="ms-4">
                <Figure.Image
                  width={252}
                  height={322}
                  alt="171x180"
                  src={image1}
                />
                <Figure.Caption>
                  <span className="color-secundary">
                    Remedios Sebastian Riquelme
                  </span>{" "}
                  <br /> <span> Directora General </span>
                </Figure.Caption>
              </Figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Figure className="ms-4">
                <Figure.Image
                  width={252}
                  height={322}
                  alt="171x180"
                  src={image1}
                />
                <Figure.Caption>
                  <span className="color-secundary">
                    Remedios Sebastian Riquelme
                  </span>{" "}
                  <br /> <span> Directora General </span>
                </Figure.Caption>
              </Figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Figure className="ms-4">
                <Figure.Image
                  width={252}
                  height={322}
                  alt="171x180"
                  src={image1}
                />
                <Figure.Caption>
                  <span className="color-secundary">
                    Remedios Sebastian Riquelme
                  </span>{" "}
                  <br /> <span> Directora General </span>
                </Figure.Caption>
              </Figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
