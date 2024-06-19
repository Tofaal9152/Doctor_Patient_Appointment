import React from "react";
// Adding Style.js and assets
import style from "../../style";
// Importing Components
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import FeatureList from "./Feature/FeatureList";
import Feature1 from "./Feature/Feature1";
import Feature2 from "./Feature/Feature2";
import Feature3 from "./Feature/Feature3";
import Footer from "./Footer/Footer";
import backgroundImage from "../../assets/backgroundImage.jpeg";

const LandingPage = () => {
  return (
    <div>
      {/* navbar */}
      <div className="w-full sticky top-0 glass z-10">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth} z-10`}>
            <Navbar />
          </div>
        </div>
      </div>
      {/* Hero */}
      <div
        className=" w-full overflow-hidden h-screen bg-cover bg-center relative top-[-4.13rem] z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={`${style.paddingX} ${style.flexCenter} h-screen`}>
          <div className="w-full h-1">{/* pseudo element */}</div>
          <div className={`${style.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>
      {/* main */}
      <div className={`${style.paddingX} ${style.flexCenter} py-[125px]`}>
        <div className={`${style.boxWidth}`}>
          <FeatureList />
        </div>
      </div>
      {/* <Feature1 /> */}
      <div
        className={`${style.paddingX} ${style.flexCenter} bg-[#F8F8FA] py-[95px]`}
      >
        <div className={`${style.boxWidth}`}>
          <Feature1 />
        </div>
      </div>
      {/* <Feature2 /> */}
      <div
        className={`${style.paddingX} ${style.flexCenter} bg-[#FDFDFD]  py-[95px]`}
      >
        <div className={`${style.boxWidth}`}>
          <Feature2 />
        </div>
      </div>
      {/* <Feature3 /> */}
      <div
        className={`${style.paddingX} ${style.flexCenter} bg-[#F8F8FA] py-[95px]`}
      >
        <div className={`${style.boxWidth}`}>
          <Feature3 />
        </div>
      </div>
      {/* Footer /> */}
      <div
        className={`${style.paddingX} ${style.flexCenter} bg-[#F8F8FA] pb-[1rem]`}
      >
        <div className={`${style.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
