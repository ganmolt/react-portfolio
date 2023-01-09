import React from "react";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className='footer-inner'>
          <ul className="footer-menu">
            <li>
              <Link to="/">ホーム</Link>
            </li>
            {/* <li>
              <Link to="/about">about</Link>
            </li> */}
          </ul>
          <p className="copyright">© 2023 ganmolt</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;