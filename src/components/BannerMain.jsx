import React from "react";
import ButtonGetWhitelsted from "./ButtonGetWhitelsted";
import bannerDesktop from "../assets/img/bannermain.jpg";

export default function BannerMain() {
  return (
    <div className="position-relative">
      <div>
        <div className="container">
          <div className="banner-text">
            <h1
              className="peso-bold tamaño-banner"
              style={{ color: "#185975" }}
            >
              WELCOME TO <br /> PAZTOUR AGENCY
            </h1>
            <div className="mt-3">
              <ButtonGetWhitelsted />
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-100"
            style={{ maxHeight: "850px" }}
            src={bannerDesktop}
            alt="auto-banner-desktop"
          />
        </div>
      </div>
    </div>
  );
}
