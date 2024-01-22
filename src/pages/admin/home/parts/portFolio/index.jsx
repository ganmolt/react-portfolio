import { createContext, useState, useEffect } from 'react'

import axios from "axios";
import Cookies from "js-cookie";

import imgSeimitsuKensaku from "Images/home/SeimitsuKensaku.jpg";
import imgLinkHub from "Images/home/LinkHub.jpg";
import imgPortfolio from "Images/home/Slugma.jpg";

import { ImageEncoder } from "./imageEncoder";
import { Work } from "./work";

export const PortFolio = () => {
  const title = "PORTFOLIO";
  const description = "私が作った作品一覧です";

  const [loading, setLoading] = useState();
  const [works, setWorks] = useState();

  const handleGetWorks = async () => {
    try {
      if (!Cookies.get("_access_token")) return;
    
      const res = await axios.get("http://localhost:3001/admin/works", {
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
      <ImageEncoder />
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
        
        {/* <div className="col-md-4 col-sm-6 service">
          <Work
            name="精密検索"
            url="https://seimitsu-kensaku.com/"
            img={imgSeimitsuKensaku}
            description="精密採点DX-Gのデータ閲覧、曲検索が同時にできるサービスです。"
            tech="Ruby on Rails, React, Render, Vercel, PlanetScale"
          />
        </div>
        <div className="col-md-4 col-sm-6 service">
          <Work
            name="ポートフォリオ"
            url="https://github.com/ganmolt"
            img={imgPortfolio}
            description="ポートフォリオを作ってみました。react.jsを初めて触りました。"
            tech="React, github pages"
          /> */}
        {/* </div> */}
      </div>
    </>
  )
}
