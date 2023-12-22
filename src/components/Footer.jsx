import React from "react";
import {Link} from "react-router-dom"

export const Footer = () => {
  return (
    <footer>
      <nav>
        <div className='footer-inner'>
          <ul className="footer-menu">
            <li>
              <Link to="/">ホーム</Link>
            </li>
          </ul>
          <p className="copyright">© 2023 ganmolt</p>
        </div>
      </nav>
    </footer>
  );
};
