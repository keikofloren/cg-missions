import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import MissionsPage from './pages/Missions/MissionsPage';
import MissionDetailsPage from './pages/Missions/MissionDetails/MissionDetailsPage';
import MerchandisePage from './pages/Merchandise/MerchandisePage';
import ShoppingCartPage from './pages/ShoppingCart/ShoppingCartPage';

function App() {
  return (
    <Router>
      <div className="App">

        <nav>
          <Link to ="/">Home</Link> |{' '}
          <Link to="/about">About</Link> |{' '}
          <Link to="/contact">Contact</Link> |{' '}
          <Link to="/missions">Missions</Link> |{' '}
          <Link to="/merchandise">Merchandise</Link> |{' '}
          <Link to="/shopping-cart">Shopping Cart</Link> |{' '}
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/missions/:missionId" element={<MissionDetailsPage />} />
          <Route path="/merchandise" element={<MerchandisePage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
