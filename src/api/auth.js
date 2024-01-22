// import client from "api/client";
import axios from "axios";
import Cookies from "js-cookie";

// サインアップ
export const signUp = (params) => {
  // return client.post("auth", params);
};

// サインイン
export const signIn = (params) => {
  return axios.post("http://localhost:3001/auth/signin", 
    // params,
    {
    username: 'ganmolt',
    password: '123123',
    },
  );
};

// サインアウト
export const signOut = () => {
  // return client.delete("auth/sign_out", {
  //   headers: {
  //     "access-token": Cookies.get("_access_token"),
  //     client: Cookies.get("_client"),
  //     uid: Cookies.get("_uid"),
  //   },
  // });
};

// ログインユーザーの取得
export const getCurrentUser = () => {
  if (!Cookies.get("_access_token")) return;

  return axios.post("http://localhost:3001/auth/session", {
    "access-token": Cookies.get("_access_token"),
  });
};
