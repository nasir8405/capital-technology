import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export const About = () => {
  return (
    <div className="my-container">
      <div className="about">
        <div className="row">
          <div className="col-sm-12 col-lg-6 ">
            <div className="about-left">
              <h3 className="about-heading">The ChawkBazar App</h3>
              <h2 className="about-heading2">
                <span>
                  {" "}
                  Share Your <strong>Ideas</strong> &amp; Shop Endless{" "}
                  <strong>Inspiration</strong>{" "}
                </span>
              </h2>
              <div>
                <Link>
                  <img
                    src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-store.png&w=256&q=75"
                    alt="dummy"
                  />
                </Link>
                <Link className="mx-3">
                  <img
                    src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fplay-store.png&w=256&q=75"
                    alt="dummy"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="about-right">
              <img
                src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp.png&w=384&q=75"
                alt="dummy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
