import imgSeimitsukensaku from "Images/home/seimitsukensaku.jpg";
import imgLinkhub from "Images/home/linkhub.jpg";
import imgPortfolio from "Images/home/magmag.jpg";

export const PortFolio = () => {
  return (
    <>
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
            <a href="https://colink.jp/"><img src={imgLinkhub} alt="LinkHub" /></a>
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
            <a href="https://seimitsu-kensaku.herokuapp.com/"><img src={imgSeimitsukensaku} alt="seimitsu-kensaku" /></a>
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
            <a href="https://github.com/ganmolt"><img src={imgPortfolio} alt="portfolio" /></a>
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
    </>
  )
}