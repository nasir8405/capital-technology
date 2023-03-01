import React from "react";
import { Link } from "react-router-dom";
import "./Deal.css";

export const Deal = () => {
  return (
    <div className="my-container">
      <Link>
        <img
          src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-4.jpg&w=1920&q=100"
          alt="dummy"
          width="100%"
          className="deal-wrapper"
        />
      </Link>
    </div>
  );
};
