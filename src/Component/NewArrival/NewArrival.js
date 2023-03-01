import React from "react";
import { Product } from "../Products/Product";
import "./NewArrival.css";

export const NewArrival = ({ arrivalData }) => {
  return (
    <div>
      <h3>New Arrival</h3>
      <div className="row">
        {arrivalData.map((item) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-3" key={item.id}>
              <Product item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
