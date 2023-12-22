import React from "react";
import {Link} from "react-router-dom"

export const Header = () => {
  return <header>
    <div className="logo">
      <h3>ポートフォリオ</h3>
    </div>

    <nav>
      <ul>
        <li>
          <Link to="/">ホーム</Link>
        </li>
      </ul>
    </nav>
  </header>;
};
