import React from "react";
import Cookies from "js-cookie";

import { useContext } from "react";
import { AuthContext } from "App";

import {Link} from "react-router-dom"


export const Header = () => {
  const { isSignedIn } = useContext(AuthContext);

  const { setIsSignedIn } = useContext(AuthContext);
  const signOut = () => {
    setIsSignedIn(false);
    Cookies.remove('_access_token')
  };

  const DefaultLinks = () => (
    <li>
      <Link to="/">ホーム</Link>
    </li>
  )
  const AdminLinks = () => (
    isSignedIn && (
      <li>
        <Link to="/" onClick={signOut}>ログアウト</Link>
      </li>
    )
  )

  return (
    <header>
      <div className="logo">
        <h3>ポートフォリオ</h3>
      </div>

      <nav>
        <ul>
          <DefaultLinks />
          <AdminLinks />
        </ul>
      </nav>
    </header>
  )
};
