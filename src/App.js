import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element = {<HomePage />} />
          {/* <Route path="/about" element = {<AboutPage />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
