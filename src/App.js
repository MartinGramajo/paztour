import "./App.css";
import Asked from "./components/Asked";
import BannerAbout from "./components/BannerAbout";
import BannerAboutCel from "./components/BannerAboutCel";
import BannerMain from "./components/BannerMain";
import BannerMainCel from "./components/BannerMainCel";
import Crew from "./components/Crew";
import CrewCel from "./components/CrewCel";
import FormContact from "./components/FormContact";
import FormContactCel from "./components/FormContactCel";
import Genesis from "./components/Genesis";
import GenesisCel from "./components/GenesisCel";
import NavbarReact from "./components/NavbarReact";
import NavbarReactCel from "./components/NavbarReactCel";
import VideoCollections from "./components/VideoCollections";
import AskedCel from "./components/AskedCel";
import Footer from "./components/Footer";
import FooterCel from "./components/FooterCel";
import Metaverse from "./components/Metaverse";
import MetaverseCel from "./components/MetaverseCel";
import Wsp from "./components/Wsp";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <Wsp />

            <div style={{ backgroundColor: "#1D1E1C" }}>
                <div className="d-none d-lg-block">
                    <NavbarReact />
                </div>
                <div className="d-lg-none d-block">
                    <NavbarReactCel />
                </div>
            </div>
            <div>
                <div className="d-none d-lg-block">
                    <BannerMain />
                </div>
                <div className="d-lg-none d-block" style={{ backgroundColor: "#1D1E1C" }}>
                    <BannerMainCel />
                </div>
            </div>

            <div className="color-black-light" id="paztour">
                <div className=" d-none d-lg-block" data-aos="fade-up">
                    <Genesis />
                </div>
                <div className="d-lg-none d-block" data-aos="fade-up">
                    <GenesisCel />
                </div>
            </div>
            <div className="text-dark" id="oficinas">
                <div className="d-none d-lg-block" data-aos="fade-up">
                    <BannerAbout />
                </div>
                <div className="d-lg-none d-block" data-aos="fade-up">
                    <BannerAboutCel />{" "}
                </div>
            </div>

            <div style={{ backgroundColor: "#181818" }} data-aos="fade-up">
                <VideoCollections />
            </div>
            <div >
                <div className="d-none d-lg-block" data-aos="fade-up">
                    <Metaverse />
                </div>
                <div className="d-lg-none d-block" data-aos="fade-up">
                    <MetaverseCel />
                </div>
            </div>
            <div style={{ backgroundColor: "#181818" }}>
                <div className="d-none d-lg-block" data-aos="fade-up">
                    <Crew />
                </div>
                <div className="d-lg-none d-block" data-aos="fade-up">
                    <CrewCel />
                </div>
            </div>
            <div >
                <div className="d-none d-lg-block" data-aos="fade-up">
                    <Asked />
                </div>
                <div className="d-lg-none d-block" data-aos="fade-up">
                    <AskedCel />
                </div>
            </div>
            <div style={{ backgroundColor: "#181818" }} id="contacto" >
                <div className="d-none d-lg-block" data-aos="fade-up">
                    <FormContact />
                </div>
                <div className="d-lg-none d-block" data-aos="fade-up">
                    <FormContactCel />
                </div>
            </div>
            <div style={{ backgroundColor: "#181818" }}>
                <div className="d-none d-lg-block">
                    <hr className="bg-white container" />
                    <Footer />
                </div>
                <div className="d-lg-none d-block">
                    <FooterCel />
                </div>
            </div>
        </div>
    );
}

export default App;
