import React, { useState, useEffect } from "react";
import "../components/Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const messages = [
  "New launch⚠️: Try our Drop A Tint Lip Oil at Rs.599",
  "Use code: TREAT10 and enjoy 10% OFF on all orders🙌",
  "Enjoy Rs.300 Off on orders above Rs.999! Use Code: FESTIVE300🎉",
  "New launch⚠️: Try our Glide Peptide Serum Lipstick at Rs.499"
];

const Navigation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const slideDuration = 500; 
    const pauseDuration = 1000; 

    const intervalId = setInterval(() => {
      setIsPaused(true); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setIsPaused(false); 
      }, pauseDuration);
    }, slideDuration + pauseDuration);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="navbar">
      <div className="nav-belt">
        <div className="nav-belt-texts">
        <div className="nav-belt-left">
            {messages.map((message, index) => (
              <p
                key={index}
                style={{
                  transform: `translateY(${(index - currentIndex) * 100}%)`,
                  transition: isPaused ? 'none' : 'transform 0.5s ease-in-out'
                }}
              >
                {message}
              </p>
            ))}
          </div>
          <div className="nav-belt-right">
            <div className="icon">
              <img src="https://d32baadbbpueqt.cloudfront.net/Wtp/tabIcons/1f5ed774-9649-4423-b694-60e28769419e.png" />
              <p>GET APP</p>
            </div>
            <div className="icon">
              <img src="https://d32baadbbpueqt.cloudfront.net/Wtp/tabIcons/acc0c762-c6c8-4df6-a929-15fcf4f33a9a.png" />
              <p>STORE</p>
            </div>
            <div className="icon">
              <img src="https://d32baadbbpueqt.cloudfront.net/Wtp/tabIcons/1862924f-1da6-49c4-bbe5-ad0bb3e4dfdd.png" />
              <p>GIFT CARD</p>
            </div>
            <div className="icon">
              <img src="https://d32baadbbpueqt.cloudfront.net/Wtp/tabIcons/f3076ab3-aa45-4eb6-b617-923a999feb52.png" />
              <p>HELP</p>
            </div>
          </div>
        </div>
      </div>

      <nav>
        <div className="nav-content">
          <div className="logo-part">
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FLogo%2F5d427f5b-4665-4b7f-9b17-5f089615db21.png&w=640&q=100" />
          </div>
          <div className="middle-search-part">
            <div className="search-bar">
              <input
                id="search-input"
                type="text"
                placeholder='Try "Liquid Lipstick"'
              />
              <div className="search-button">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                <button id="search-btn">Search</button>
              </div>
            </div>
          </div>
          <div className="last-part">
            <div className="login-part">
              <p>x</p>
              <p>Login/Register</p>
            </div>
            <div className="icons-part">
              <p>x</p>
              <p>y</p>
              <p>z</p>
            </div>
          </div>
        </div>
      </nav>

      <div className="nav-links">
        <p>SUGAR PLAY</p>
        <p>LIPS</p>
        <p>EYES</p>
        <p>FACE</p>
        <p>NAILS</p>
        <p>SKINCARE</p>
        <p>ACCESSORIES</p>
        <p>GIFTING</p>
        <p>BESTSELLERS</p>
        <p>NEW LAUNCHES</p>
        <p>OFFERS</p>
        <p>BLOG</p>
        <p>SUGAR TOP</p>
      </div>
    </div>
  );
};

export default Navigation;
