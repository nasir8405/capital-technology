import React from "react";
import { Link } from "react-router-dom";

export const Product = ({ item }) => {
  return (
    <div>
      <Link className="card">
        <div className="img-wrapper">
          <img
            className="card-img-top"
            src={item.url}
            height="100%"
            alt="Card  cap"
          />
        </div>
        <div className="card-body">
          <h2 className="product-title">{item.title}</h2>
          <p className="product-discription">{item.discription}</p>
          <div className="product-price">{item.price}</div>
        </div>
      </Link>
    </div>
  );
};
