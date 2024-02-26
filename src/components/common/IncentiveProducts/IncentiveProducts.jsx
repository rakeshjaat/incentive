import React from "react";
import CustomButton from "./../CustomButton";
import { MessageIcon } from "../Icons";
const IncentiveProducts = ({ para, image, imgCircle }) => {
  return (
    <div className="container container_modified py-5 my-5">
      <div className="row align-items-center">
        <div className="col-6">
          <h1 className="text-black font-xxl mb-3 fw-bolder">
            <span className="text-blue">Redeem Discounts for</span> Amazing
            Products: Engage with a <span className="text-blue">Community</span>{" "}
            and <span className="text-blue">Win Cash Prizes</span>
          </h1>
          <p className="text-gray pe-xl-4 mb-4">{para}</p>
          <CustomButton
            text="Find Promotions/Contests"
            btnStyle=""
            icon={<MessageIcon />}
          />
        </div>
        <div className="col-6">
          <img className="w-100" src={image} alt="heroImg" />
          <span className="position-absolute end-0 hero_circle">{imgCircle}</span>
        </div>
      </div>
    </div>
  );
};

export default IncentiveProducts;
