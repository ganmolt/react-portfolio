import imgSeimitsuKensaku from "Images/home/seimitsukensaku.jpg";
import imgLinkHub from "Images/home/linkhub.jpg";
import imgPortfolio from "Images/home/magmag.jpg";
import { Work } from "./work";

export const PortFolio = () => {
  const title = "PORTFOLIO";
  const description = "私が作った作品一覧です";
  return (
    <>
      <div className="text-center info">
        <h2 className="section-heading">{title}</h2>
        <h3 className="section-subheading text-muted mb-5">{description}</h3>
      </div>
      <div className="row text-center">
        <div className="col-md-4 col-sm-6 service">
          <Work
            name="LinkHub"
            url="https://colink.jp"
            img={imgLinkHub}
            description="「リンク集」の共有をするサイトです。2022年秋の技育展にて登壇しました。"
            tech="Ruby on rails, AWS"
          />
        </div>
        <div className="col-md-4 col-sm-6 service">
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
          />
        </div>
      </div>
    </>
  )
}