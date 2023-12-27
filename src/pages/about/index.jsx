import profileImage from "Images/home/Profile.jpg";

import {History} from './parts/history';
import {Profile} from './parts/profile';

import './index.css';

export const About = () => {
  const title = 'About';
  const description = 'こんにちは';


  return (
    <div className="container about_container text-center">
      <h1>{title}</h1>
      <img src={profileImage} className="profileImage" alt="profileImage" />
      <p>{description}</p>

      <h3>Profile</h3>
      <div className="about_item">
        <Profile />
      </div>
      <h3>history</h3>
      <div className="about_item">
        <History />
      </div>
    </div>
  );
};
