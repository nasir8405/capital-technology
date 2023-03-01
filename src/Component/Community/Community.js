import React from "react";
import "./Community.css";
export const Community = () => {
  return (
    <div className="my-container">
      <div className="community-section">
        <div className="community-content">
          <h3>Talk To A Real Person</h3>
          <p>
            Are you on the fence? Have a question? Need a recommendation? Member
            Services is always here to help. Send us a message.
          </p>
        </div>
        <div className="community-image-container">
          <div className="community-image-wrapper">
            <img
              src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fsupport.png&w=1080&q=75"
              alt="dummy"
              width="100%"
            />
          </div>
        </div>
        <button className="community-btn">Chat With Member Services</button>
      </div>
      <div className="chat-section row">
        <div className="chat-left col-sm-12 col-md-6 col-lg-6">
          <h3>Get Expert Tips In Your Inbox</h3>
          <p>Subscribe to our newsletter and stay updated.</p>
        </div>
        <div className="chat-right col-sm-12 col-md-6 col-lg-6">
          <form>
            <input placeholder="Write your email here" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};
