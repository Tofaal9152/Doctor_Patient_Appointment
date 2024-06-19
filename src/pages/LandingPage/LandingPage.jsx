import React from "react";
// Adding Style.js and assets
import style from "../../style";
// Importing Components
import Navbar from "./Navbar/Navbar";


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
    </div>
  );
};

export default LandingPage;
