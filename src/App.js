import { createContext, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getCurrentUser } from "api/auth";

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Maru } from './components/Maru';

import './App.css';

// guest
import { Home } from './pages/home';

import { SignIn } from './pages/signIn';

// admin
import { Home as AdminHome } from './pages/admin/home';

export const AuthContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();
      if (res?.status === 200) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.username);
      } else {
        console.log("no current user");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, [setCurrentUser])

  const Private = ({ children }) => {
    if (!loading) {
      if (isSignedIn) {
        return children;
      } else {
        return <Navigate to="/signin" />;
      }
    } else {
      return <></>;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        isSignedIn,
        setIsSignedIn,
        currentUser,
        setCurrentUser,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Header />
          <Maru />
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route path="/admin" element = {<Private><AdminHome /></Private>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
