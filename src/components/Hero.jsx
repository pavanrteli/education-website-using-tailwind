import React from "react";
import shape1 from "../../public/images/shape-1.png";
import shape2 from "../../public/images/shape-2.png";
import { heroLogos } from "../constant/data";
import banner from "../../public/images/hero-banner.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="p-5 text-center flex flex-col items-center">
      <img src={shape1} alt="shape1" className="w-18 relative right-35 top-5" />
      <div className="flex flex-col justify-center items-center h-40 w-60 rounded-xl bg-amber-300 mb-4">
        <img src={shape2} alt="shape2" className="h-20 w-20" />
        <h2 className="text-xl">Unlock Your Creative Potential</h2>
      </div>
      <div>
        <p className="md:text-xl">
          with online design and development courses{" "}
        </p>
        <p className="md:text-xl">
          learn form industry experts and enhance your skills.
        </p>
      </div>

      <div className="my-4">
        <button className="bg-amber-300 rounded-xl mb-4 w-80 px-5 py-2">
          Explore Courses
        </button>
        <br />
        <button className="bg-amber-100 rounded-xl w-80 px-5 py-2 hover:bg-amber-300">
          View Pricing
        </button>
      </div>
      <Marquee speed={50} direction="left">
        <div className="flex md:flex-row mb-4">
          {[...heroLogos, ...heroLogos].map((logo, index) => (
            <div key={index} className="mx-4">
              <img src={logo.item} alt="logos" />
            </div>
          ))}
        </div>
      </Marquee>
      <figure className="relative">
        <img src={banner} alt="hero-banner" className="w-250 h-50 md:h-90" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-white flex flex-row justify-center items-center rounded-full h-15 w-15">
            <PlayArrowIcon/>
          </span>
        </div>
      </figure>
    </div>
  );
};

export default Hero;
