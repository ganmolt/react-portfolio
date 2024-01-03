import profileImage from "Images/home/Profile.jpg";

import {History} from './parts/history';
import {Profile} from './parts/profile';
import {Qualification} from './parts/qualification/index';
import {Hobby} from './parts/hobby';
import {Other} from './parts/other';

import './index.css';

export const About = () => {
  const title = 'About';
  const description = 'こんにちは';


  return (
    <div className="container about_container">
      <h1>{title}</h1>
      <img src={profileImage} className="profileImage" alt="profileImage" />
      <p>{description}</p>

      <p>
        <div className="about_item">
          <Profile />
        </div>
      </p>
      <p>
        <div className="about_item">
          <History />
        </div>
      </p>
      <p>
        <div className="about_item">
          <History />
        </div>
      </p>
      <p>
        <div className="about_item">
          <Qualification />
        </div>
      </p>
      <p>
        <div className="about_item">
          <Hobby />
        </div>
      </p>
      <p>
        <div className="about_item">
          <Other />
        </div>
      </p>
    </div>
  );
};
