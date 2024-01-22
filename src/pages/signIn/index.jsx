import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "api/auth";
import { AuthContext } from "App";
import { Header } from "components/Header";


export const SignIn = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const generateParams = () => {
    const signInParams = {
      username: username,
      password: password,
    };
    return signInParams;
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const params = generateParams();

    try {
      const res = await signIn(params);
      if (res.status === 200) {
        Cookies.set("_access_token", res.data["access-token"]);

        setIsSignedIn(true);
        // setCurrentUser(res.data.data);

        // navigate("/admin");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>    
      <header> <Header /> </header>
      <div className="container text-center">
        <p>サインインページです</p>
        <form>
          <div>
            <label htmlFor="username">ユーザー名</label>
            <input
              type="username"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">パスワード</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={(e) => handleSignInSubmit(e)}>
            Submit
          </button>
        </form>
        <Link to="/signup">サインアップへ</Link>
      </div>
    </>
  );
};
