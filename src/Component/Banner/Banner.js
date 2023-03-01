import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

export const Banner = () => {
  return (
    <div>
      <div className="container-fluid banner-container">
        <div className="banner-wrapper my-2">
          <Link to="/productDetail" className="">
            <img
              src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-1.jpg&w=1080&q=100"
              alt="Logo"
              width="100%"
              height="100%"
            />
          </Link>
          <Link to="/productDetail" className="">
            <img
              src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-2.jpg&w=640&q=100"
              alt="Logo"
              width="100%"
              height="100%"
            />
          </Link>
          <Link to="/productDetail" className="">
            <img
              src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-3.jpg&w=640&q=100"
              alt="Logo"
              width="100%"
              height="100%"
            />
          </Link>
        </div>
        <div className="banner-wrapper2">
          <Link to="/productDetail" className="">
            <img
              src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-4.jpg&w=640&q=100"
              alt="Logo"
              width="100%"
              height="100%"
            />
          </Link>
          <Link to="/productDetail" className="">
            <img
              src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-5.jpg&w=640&q=100"
              alt="Logo"
              width="100%"
              height="100%"
            />
          </Link>
          <Link to="/productDetail" className="">
            <img
              src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-6.jpg&w=1080&q=100"
              alt="Logo"
              width="100%"
              height="100%"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
