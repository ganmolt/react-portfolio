import profileImage from "Images/home/Slugma.jpg";

import { Counter } from './parts/counter';
import { PortFolio } from './parts/portFolio';
import { StackShare } from './parts/stackShare';
import { Contact } from './parts/contact';

export const Home = () => {
  const title = 'admin!!!ganmoltのポートフォリオ';
  const description = 'ganmoltです。このサイトはreactを触るために作りました。';
  return (
    <div className="container text-center">
      <h1>{title}</h1>
      <img src={profileImage} className="profileImage" alt="profileImage" />
      <p>{description}</p>

      <div className="counter">
        <Counter />
      </div>
      <section className="page-section" id="services">
        <PortFolio />
      </section>
      <section id="stackshare">
        <StackShare />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};
