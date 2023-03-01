import React from "react";
import { Link } from "react-router-dom";
import "./SellingProduct.css";

export const SellingProduct = ({ item }) => {
  return (
    <div>
      <Link>
        <div className="d-flex my-3 my-card">
          <div className="imgage-wrapper">
            <img
              src={item.url}
              alt="dummy"
              width="100%"
              height="100%"
              className="img"
            />
          </div>
          <div className="content-container">
            <div className="content-wrapper">
              <h2 className="product-heading">{item.title}</h2>
              <p className="product-p">{item.discription}</p>
              <div className="price-tag">{item.price}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
