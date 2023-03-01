import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../Products/Product";
import "./FeaturedProducts.css";

export const FeaturedProducts = ({ featuredProducts }) => {
  return (
    <div className="my-container">
      <h4>Featured Products</h4>
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 my-3">
            <Link>
              <img
                src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2FFootwear-1.png&w=640&q=75"
                alt="dummy"
                width="100%"
                height="100%"
              />
            </Link>
          </div>
          <div className="col-md-12 col-lg-6 my-3">
            <div className="row">
              {featuredProducts.map((item) => {
                return (
                  <div
                    className="col-sm-12 col-md-6 col-lg-6 products my-2"
                    key={item.id}
                  >
                    <Product item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
