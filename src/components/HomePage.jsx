import React from "react";
import profileImage from "../Images/profile.jpg";

// 制作物のアイコン
import img_seimitsukensaku from "../Images/seimitsukensaku.jpg";
import img_linkhub from "../Images/linkhub.jpg";
import img_portfolio from "../Images/magmag.jpg";

// js
import {Helmet} from 'react-helmet';

// icon
import { FaGithub } from "react-icons/fa"
//import {ImMail4} from "react-icons/im"

export const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>ganmoltのポートフォリオ</h1>

      <img src={profileImage} className="profileImage" alt="profileImage" />

      <p>
        ganmoltです。このサイトはreactを触るために作りました。
      </p>

      <div className="counter">
        <Helmet>
          <script language="javascript" type="text/javascript" src="//counter1.fc2.com/counter.php?id=13297215&main=1"></script>
        </Helmet>
        <img src="//counter1.fc2.com/counter_img.php?id=13297215&main=1" />
      </div>

      <section className="page-section" id="services">
        {/* 概要 */}
        <div className="text-center info">
          <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
          <h3 className="section-subheading text-muted mb-5">
            私が作った作品一覧です
          </h3>
        </div>
        <div className="row text-center">
          {/* LinkHub */}
          <div className="col-md-4 col-sm-6 service">
            {/* 画像部分 */}
            <div className="img-area">
              <a href="https://colink.jp/"><img src={img_linkhub} alt="LinkHub" /></a>
            </div>
            {/* タイトル */}
            <h4 className="my-3">LinkHub</h4>
            {/* 説明 */}
            <p className="text-muted">
              「リンク集」の共有をするサイトです。
              2022年秋の技育展にて登壇しました。
            </p>
            <p className="textmuted">
              使用技術：Ruby on rails, AWS
            </p>
          </div>

          {/* 精密検索 */}
          <div className="col-md-4 col-sm-6 service">
            <div className="img-area">
              <a href="https://seimitsu-kensaku.herokuapp.com/"><img src={img_seimitsukensaku} alt="seimitsu-kensaku" /></a>
            </div>
            <h4 className="my-3">精密検索</h4>
            <p className="text-muted">
              精密採点DX-Gのデータ閲覧、曲検索が同時にできるサービスです。
            </p>
            <p className="textmuted">
              使用技術: Ruby on Rails, Amazon S3, Heroku
            </p>
          </div>

          {/* ポートフォリオ */}
          <div className="col-md-4 col-sm-6 service">
            <div className="img-area">
              <a href="https://github.com/ganmolt"><img src={img_portfolio} alt="portfolio" /></a>
            </div>
            <h4 className="my-3">ポートフォリオ</h4>
            <p className="text-muted">
              ポートフォリオを作ってみました。react.jsを初めて触りました。
            </p>
            <p className="textmuted">
              使用技術: React.js, github pages
            </p>
          </div>
          
        </div> {/* row */}
      </section>
      
      {/* StackShareのバッジを表示 */}
      <section id="stackshare">
        <h2 className="title">StackShare</h2>
        <a data-theme="dark" data-layers="1,2,3,4" data-stack-embed="true" href="https://embed.stackshare.io/stacks/embed/8735dd74b0339208e9210ba4d6a7bd"></a>
        <Helmet>
          <script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8"></script>
        </Helmet>
      </section>


      <section id="contact">
        <h2 className="title">Contact</h2>
        <a href="https://github.com/ganmolt"><FaGithub size={'50px'} /></a>
      </section>
    </div>
  );
};
