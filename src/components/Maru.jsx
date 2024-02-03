import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

import png_mbtk from "../Images/maru/mabataki_ren_touka.png";
import png_hidari from "../Images/maru/hidarimuku_1_ren_touka.png";
import png_migi from "../Images/maru/migimuku_1_ren_touka.png";

import './Maru.css';

const Maru = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isJumped, setIsJumped] = useState(false);
  const [count, setCount] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState();

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }

  const posX = getRandom(0, 400);
  const posY = getRandom(0, 600);

  // ---------------- ANIMATION ----------------
  const urls = [
    png_mbtk,
    png_hidari,
    png_migi
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      performAnimation();

      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  const performAnimation = () => {
    if (isAnimated) return;

    const rnd = getRandom(1, 100);
    if ( 1 <= rnd && rnd <= 21) {
      if ( 1 <= rnd && rnd <= 7 ) setBackgroundImage(urls[0]);
      else if ( rnd <= 14 ) setBackgroundImage(urls[1]);
      else if ( rnd <= 21) setBackgroundImage(urls[2]);
      
      setIsAnimated(true);
      setTimeout(() => setIsAnimated(false), 2000);
    }
  }
  // -------------------------------------------
  
  // ---------------- JUMP ----------------
  const handleClicked = () => {
    if (isJumped) return;
    setIsJumped(true);
    setTimeout(() => setIsJumped(false), 1000);
  };
  // --------------------------------------

  return (
    <Draggable defaultPosition={{ x: posX, y: posY }}>
      <div className="wrapper">
        <div className="maru-area">
          <div className={isJumped ? "jump" : ""} id="button" onClick={handleClicked}>
            {/* 背景画像 */}
            <div id="maru-bg"></div>
            {/* キャラクター本体 */}
            <div className={isAnimated ? "mabataki" : ""} id="maru" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Maru;
