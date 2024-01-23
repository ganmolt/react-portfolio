import axios from "axios";
import Cookies from "js-cookie";

// サインイン
export const signIn = (params) => {
  return axios.post("http://localhost:3001/auth/signin", 
    params,
  );
};

// ログインユーザーの取得
export const getCurrentUser = () => {
  if (!Cookies.get("_access_token")) return;

  return axios.get("http://localhost:3001/auth/session", {
    headers: {
      "access-token": Cookies.get("_access_token"),
    },
  });
};
