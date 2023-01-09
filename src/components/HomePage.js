import React from "react";
// import image1 from "../../Images/bg1.jpg";
import profileImage from "../Images/magmag.jpg";

// 制作物のアイコン
import img_seimitsukensaku from "../Images/seimitsukensaku.png";
import img_linkhub from "../Images/linkhub.jpg";
import img_portfolio from "../Images/magmag.jpg";

// js
import {Helmet} from 'react-helmet';

// icon
import { FaGithub } from "react-icons/fa"
//import {ImMail4} from "react-icons/im"

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>ganmoltのポートフォリオ</h1>

      <img src={profileImage} className="profileImage" />

      <p>
        ganmoltです。このサイトはreactを触るために作りました。
      </p>

      <section class="page-section" id="services">
        {/* 概要 */}
        <div class="text-center info">
          <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
          <h3 class="section-subheading text-muted mb-5">
            私が作った作品一覧です
          </h3>
        </div>
        <div class="row text-center">
          {/* LinkHub */}
          <div class="col-md-4 col-sm-6 service">
            {/* 画像部分 */}
            <div class="img-area">
              <a href="https://colink.jp/"><img src={img_linkhub} /></a>
            </div>
            {/* タイトル */}
            <h4 class="my-3">LinkHub</h4>
            {/* 説明 */}
            <p class="text-muted">
              「リンク集」の共有をするサイトです。
              2022年秋の技育展にて登壇しました。
              使用技術：Ruby on rails, AWS
            </p>
          </div>

          {/* 精密検索 */}
          <div class="col-md-4 col-sm-6 service">
            <div class="img-area">
              <a href="https://seimitsu-kensaku.herokuapp.com/"><img src={img_seimitsukensaku} /></a>
            </div>
            <h4 class="my-3">精密検索</h4>
            <p class="text-muted">
              精密採点DX-Gのデータ閲覧、曲検索が同時にできるサービスです。
              使用技術: Ruby on Rails, Amazon S3, Heroku
            </p>
          </div>

          {/* ポートフォリオ */}
          <div class="col-md-4 col-sm-6 service">
            <div class="img-area">
              <a href="https://github.com/ganmolt"><img src={img_portfolio} /></a>
            </div>
            <h4 class="my-3">ポートフォリオ</h4>
            <p class="text-muted">
              ポートフォリオを作ってみました。react.jsを初めて触りました。
              使用技術: React.js, github pages
            </p>
          </div>
          
        </div> {/* row */}
      </section>
      
      {/* StackShareのバッジを表示 */}
      <section id="stackshare">
        <h2 class="title">StackShare</h2>
        <a data-theme="dark" data-layers="1,2,3,4" data-stack-embed="true" href="https://embed.stackshare.io/stacks/embed/8735dd74b0339208e9210ba4d6a7bd"></a>
        <Helmet>
          <script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8"></script>
        </Helmet>
      </section>


      <section id="contact">
        <h2 class="title">Contact</h2>
        <a href="https://github.com/ganmolt"><FaGithub size={'50px'} /></a>
        {/*<ImMail4 size={'50px'} />
        {/* <a data-v-48fc1b50="" href="https://github.com/ganmolt" target="_blank">
          <img data-v-48fc1b50="" src="img/github_favicon.ec3a60c8.png" alt="github favicon">
        </a>
        <a data-v-48fc1b50="" href="#contact" class="mail">
          <img data-v-48fc1b50="" src="data:image/png;base64,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" alt="mail">
        </a> */}
      </section>
    </div>
  );
};

export default HomePage;