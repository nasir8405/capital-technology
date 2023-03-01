import React from "react";
import { Link } from "react-router-dom";
import "./Collection.css";

export const Collection = () => {
  return (
    <div className="my-container collection">
      <div className="women-collection">
        <img
          src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fwomen.png&w=640&q=75"
          alt="dummy"
          width="100%"
        />
        <div className="tag1">NEW YEAR</div>
        <div className="tag2 tag3">20</div>
        <Link className="link"># WOMEN EXCLUSIVE </Link>
      </div>
      <div className="men-collection">
        <img
          src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fmen.png&w=640&q=75"
          alt="dummy"
          width="100%"
        />
        <div className="tag1 exclusive">EXCLUSIVE</div>
        <div className="tag2">21</div>
        <Link className="link">MEN EXCLUSIVE</Link>
      </div>
    </div>
  );
};
