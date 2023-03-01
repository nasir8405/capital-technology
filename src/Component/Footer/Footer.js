import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="my-container margin-footer">
      <div className="footer">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-2">
            <h4>Social</h4>
            <ul>
              <li>
                <Link>Facebook</Link>
              </li>
              <li>
                <Link>Twitter</Link>
              </li>
              <li>
                <Link>Instagram</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <h4>Contact</h4>
            <ul>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>
                  <span>Email: admin@chawkbazar.demo</span>
                </Link>
              </li>
              <li>
                <Link>Website: https://redq.io</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <h4>About</h4>
            <ul>
              <li>
                <Link>Support Center</Link>
              </li>
              <li>
                <Link>Customer Support</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Copyright</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <h4>Customer Care</h4>
            <ul>
              <li>
                <Link>FAQ & Helps</Link>
              </li>
              <li>
                <Link>Shipping & Delivery</Link>
              </li>
              <li>
                <Link>Return & Exchanges</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <h4>Our Information</h4>
            <ul>
              <li>
                <Link>Privacy policy update</Link>
              </li>
              <li>
                <Link>Terms & conditions</Link>
              </li>
              <li>
                <Link>Return Policy</Link>
              </li>
              <li>
                <Link>Site Map</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
            <h4>Community</h4>
            <ul>
              <li>
                <Link>Announcements</Link>
              </li>
              <li>
                <Link>Answer center</Link>
              </li>
              <li>
                <Link>Discussion boards</Link>
              </li>
              <li>
                <Link>Giving works</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            Copyright © 2023 RedQ, Inc. All rights reserved
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end">
            <ul>
              <li>
                <Link>
                  <img
                    src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fpayment%2Fmastercard.png&w=48&q=75"
                    alt="dummy"
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <img
                    src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fpayment%2Fvisa.png&w=64&q=75"
                    alt="dummy"
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <img
                    src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fpayment%2Fpaypal.png&w=96&q=75"
                    alt="dummy"
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <img
                    src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fpayment%2Fjcb.png&w=32&q=75"
                    alt="dummy"
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <img
                    src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fpayment%2Fskrill.png&w=48&q=75"
                    alt="dummy"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
