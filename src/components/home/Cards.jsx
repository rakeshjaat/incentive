import React from "react";
import { toolCards } from "../common/Helper";

const Cards = () => {
  return (
    <div className="container container-modified mb-5 pb-xl-5">
      <div className="row pb-xl-5">
        {toolCards.map((obj, index) => {
          return (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mt-4" key={index}>
              <div className="tools_card bg-white d-flex flex-column align-items-center justify-content-center">
                {obj.icon}
                <p className="mt-3 mt-xl-4 pt-xl-1 text-black fw-medium mb-0">{obj.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
