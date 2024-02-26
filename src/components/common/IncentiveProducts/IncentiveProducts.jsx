import React from "react";
import CustomButton from "./../CustomButton";
import { HeroHeadingVector, MessageIcon } from "../Icons";
const IncentiveProducts = ({ para, image, imgCircle }) => {
  return (
    <div className="container container_modified py-5 my-5">
      <span className="position-absolute end-0 hero_circle">{imgCircle}</span>
      <div className="row align-items-center">
        <div className="col-6">
          <h1 className="text-black font-xxl mb-3 fw-bolder me-xxl-5 position-relative">
            <span className="hero_heading_vector position-absolute top-0 start-0 z-n1">
              <HeroHeadingVector/>
            </span>
            <span className="text-blue">Redeem Discounts for</span> Amazing
            Products: Engage with a <span className="text-blue">Community</span>{" "}
            and <span className="text-blue">Win Cash Prizes</span>
          </h1>
          <p className="text-gray pe-xl-5 me-xl-4 mb-4">{para}</p>
          <CustomButton
            text="Find Promotions/Contests"
            btnStyle=""
            icon={<MessageIcon />}
          />
        </div>
        <div className="col-6">
          <img className="w-100" src={image} alt="heroImg" />
        </div>
      </div>
    </div>
  );
};

export default IncentiveProducts;
