import React from "react";
import { SellingProduct } from "./SellingProduct";

export const SellingProducts = ({ sellingProductData }) => {
  return (
    <div>
      <h3>On Selling Products</h3>
      <div className="row">
        {sellingProductData.map((item) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
              <SellingProduct item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
