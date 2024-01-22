import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './pages/home';
import { Pieces } from './pages/pieces';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Maru } from './components/Maru';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Maru />

        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/pieces" element = {<Pieces />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
