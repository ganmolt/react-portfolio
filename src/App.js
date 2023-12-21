import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

import Maru from './components/Maru';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />

        <Maru />

        <Routes>
          <Route path="/" element = {<HomePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
