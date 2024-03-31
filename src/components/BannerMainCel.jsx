import React from "react";
import ButtonGetWhitelsted from "./ButtonGetWhitelsted";
import bannerMobile from "../assets/img/bannermain.jpg";

export default function BannerMainCel() {
  return (
    <div>
      <div>
        <div>
          <img className="w-100" src={bannerMobile} alt="auto-banner-desktop" />
        </div>
        <div className="container">
          <div className="mt-5">
            <h1 className=" text-white peso-bold tamaño-banner mb-4 pb-2">
              WELCOME TO <br /> PAZTOUR AGENCY
            </h1>

            <div className="mt-3">
              <ButtonGetWhitelsted />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
