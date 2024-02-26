import React from "react";
import IncentiveProducts from "../common/IncentiveProducts/IncentiveProducts";
import heroImg from "../../assets/images/webp/hero_main.webp";
import { HeroImgCircle } from "../common/Icons";

const Hero = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center position-relative overflow-hidden hero_section">
      <IncentiveProducts
        para="Use Incentive to list and find promotional discounts and win prizes for helping support businesses. Chat and connect with others and then privately review the promotion."
        image={heroImg}
        imgCircle={<HeroImgCircle />}
      />
    </div>
  );
};

export default Hero;
