import React from "react";
// Adding Style.js and assets
import backgroundImage from "../../assets/bgImage.jpg";
import style from "../../style";
// Importing Components
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";


const LandingPage = () => {
  return (
    <div>
      <div className="w-full sticky top-0 glass z-10">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth} z-10`}>
            <Navbar />
          </div>
        </div>
      </div>
      {/* Hero */}
      <div
        className=" w-full overflow-hidden h-screen object-cover bg-center relative top-[-4.13rem] z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={`${style.paddingX} ${style.flexCenter} h-screen`}>
          <div className="w-full h-1">{/* pseudo element */}</div>
          <div className={`${style.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
