import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

import png_mbtk from "../Images/maru/mabataki_ren_touka.png";
import png_hidari from "../Images/maru/hidarimuku_1_ren_touka.png";
import png_migi from "../Images/maru/migimuku_1_ren_touka.png";

import './Maru.css';

const Maru = () => {
  const [urls] = useState([png_mbtk, png_hidari, png_migi]);
  const [num, setNum] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isJumped, setIsJumped] = useState(false);
  const [count, setCount] = useState(0);

  // ------------------JUMP---------------
  const setFinished = () => setIsJumped(false);

  const onClickButton = () => {
    setIsJumped(true);
    setTimeout(setFinished, 1000);
  };
  // -------------------------------------

  // ----------------MABATAKI-------------
  const getRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;
  useEffect(() => {
    const intervalId = setInterval(() => {
      performAnimation();

      console.log(`Count: ${count}`);
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  const performAnimation = () => {
    if (isAnimated) return;

    const animationOptions = [
      { isAnimated: true, num: 2 },
      { isAnimated: true, num: 1 },
      { isAnimated: true, num: 0 },
    ];

    animationOptions.forEach((options) => {
      const rnd = getRandom(1, 100);
      if (rnd % 13 === 0 || rnd % 11 === 0 || rnd % 10 === 0) {
        setIsAnimated(true);
        setNum(options.num);
        setTimeout(() => setIsAnimated(false), 2000);
      }
    });
  }

  return (
    <Draggable defaultPosition={{ x: 0, y: 0 }}>
      <div className="wrapper">
        <div className="maru-area">
          <div className={isJumped ? "jump" : ""} id="button" onClick={onClickButton}>
            {/* 背景画像 */}
            <div id="maru-bg"></div>
            {/* キャラクター本体 */}
            <div className={isAnimated ? "mabataki" : ""} id="maru" style={{ backgroundImage: `url(${urls[num]})` }}></div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Maru;
