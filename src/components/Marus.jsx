import React, { useState, useEffect } from 'react';
import Maru from './Maru';

import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

import './Marus.css'

const Marus = () => {
  const [maruCount, setMaruCount] = useState(1);
  const [inputCount, setInputCount] = useState(1);

  const addMaru = () => {
    const count = maruCount + 1;
    setMaruCount(count);
    setInputCount(count);
  };

  const removeMaru = () => {
    const count = Math.max(maruCount - 1, 0)
    setMaruCount(count);
    setInputCount(count);
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setInputCount(isNaN(value) ? 0 : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMaruCount(inputCount);
  };

  // -------- window-size --------
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);
  // -----------------------------

  return (
    <div>
      <div className='maru-header'>
        <button onClick={removeMaru}><FaMinusCircle size={'20px'} /></button>
        <form onSubmit={handleSubmit}>
          <input type="number" value={inputCount} onChange={handleInputChange} />
        </form>
        <button onClick={addMaru}><FaPlusCircle size={'20px'} /></button>
      </div>

      {Array.from({ length: maruCount }, (_, index) => (
        <Maru key={index} maxWidth={windowWidth} maxHeight={windowHeight} />
      ))}
    </div>
  );
};

export default Marus;
