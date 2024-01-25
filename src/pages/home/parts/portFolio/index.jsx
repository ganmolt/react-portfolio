import { useState, useEffect } from 'react'

import axios from "axios";
import Cookies from "js-cookie";

import { Work } from "./work";

export const PortFolio = () => {
  const title = "PORTFOLIO";
  const description = "私が作った作品一覧です";

  const [loading, setLoading] = useState();
  const [works, setWorks] = useState();

  const handleGetWorks = async () => {
    try {
      if (!Cookies.get("_access_token")) return;
    
      const res = await axios.get(`${process.env.REACT_APP_API}/works`, {
        headers: {
          "access-token": Cookies.get("_access_token"),
        },
      });
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
      <div className="text-center info">
        <h2 className="section-heading">{title}</h2>
        <h3 className="section-subheading text-muted mb-5">{description}</h3>
      </div>
      <div className="row text-center">
        {works?.map((work, idx) => (
          <div key={idx} className="col-md-4 col-sm-6 service">
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
