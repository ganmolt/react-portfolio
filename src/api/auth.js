import axios from "axios";
import Cookies from "js-cookie";

// サインイン
export const signIn = (params) => {
  return axios.post(`${process.env.REACT_APP_API}/auth/signin`, 
    params,
  );
};

// ログインユーザーの取得
export const getCurrentUser = () => {
  if (!Cookies.get("_access_token")) return;

  return axios.get(`${process.env.REACT_APP_API}/auth/session`, {
    headers: {
      "access-token": Cookies.get("_access_token"),
    },
  });
};
