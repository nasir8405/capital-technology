import React from "react";
import "./Cards.css";

export const Cards = ({ cardsData }) => {
  return (
    <div>
      <h4>Top Brands</h4>
      <div className="row cards-row">
        {cardsData.map((item) => {
          return (
            <div className="col-sm-6 col-md-6 col-lg-3 my-3" key={item.id}>
              <div>
                <img src={item.img1} width="100%" height="301px" alt="dummy" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
