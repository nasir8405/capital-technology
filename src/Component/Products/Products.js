import React from "react";
import { Product } from "./Product";
import "./Products.css";

export const Products = ({ productData }) => {
  return (
    <div className="product-container">
      <div className="product-wrapper">
        <h3 className="products-heading">Flash Sale</h3>
        <div className="row">
          {productData.map((item) => {
            return (
              <div className="col-sm-6 col-md-6 col-lg-3" key={item.id}>
                <Product item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
