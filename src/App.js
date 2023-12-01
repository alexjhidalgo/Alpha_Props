import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Listings from './components/Listings'; 
import Potentials from './components/Potentials';
import Occupieds from './components/Occupieds';
import Cashflows from './components/Cashflows'; 
import Home from './components/Home';
import Markets from './components/Markets';

function App() {
  return (
    <div class="homepage">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/potentials" element={<Potentials/>} />
          <Route path="/listings" element={<Listings/>} />
          <Route path="/occupieds" element={<Occupieds/>} />
          <Route path="/cashflows" element={<Cashflows/>} />
          <Route path="/markets" element={<Markets/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;