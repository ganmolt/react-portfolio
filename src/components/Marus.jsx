import React, { useState } from 'react';
import Maru from './Maru';

import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

import './Marus.css'

const Marus = () => {
  const [maruCount, setMaruCount] = useState(1);

  const addMaru = () => {
    setMaruCount((prevCount) => prevCount + 1);
  };

  const removeMaru = () => {
    setMaruCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  return (
    <div>
      <div className='maru-header'>
        <button onClick={removeMaru}><FaMinusCircle size={'20px'} /></button>
        <button onClick={addMaru}><FaPlusCircle size={'20px'} /></button>
      </div>
      {Array.from({ length: maruCount }, (_, index) => (
        <Maru key={index} />
      ))}
    </div>
  );
};

export default Marus;
