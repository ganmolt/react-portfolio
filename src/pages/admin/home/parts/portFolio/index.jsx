import { useState, useEffect } from 'react'

import axios from "axios";
import Cookies from "js-cookie";

import { WorkCreator } from "./workCreator";
import { Work } from "./work";
import { DeleteButton } from './deleteButton';

export const PortFolio = () => {
  const title = "PORTFOLIO";
  const description = "私が作った作品一覧です";

  const [loading, setLoading] = useState();
  const [works, setWorks] = useState();

  const handleGetWorks = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/works`);
      if (res?.status === 200) {
        setWorks(res?.data);
      } else {
        console.log("no Data");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    handleGetWorks();
  }, [setWorks])

  return (
    <>
      <WorkCreator />
      <div className="text-center info">
        <h2 className="section-heading">{title}</h2>
        <h3 className="section-subheading text-muted mb-5">{description}</h3>
      </div>
      <div className="row text-center">
        {works?.map((work, idx) => (
          <div key={idx} className="col-md-4 col-sm-6 service">
            <DeleteButton
              id={work.ID}
            />
            <Work
              name={work.name}
              url={work.url}
              encodedImg={work.encodedImg}
              description={work.description}
              tech={work.tech}
            />
          </div>
        ))}
      </div>
    </>
  )
}
