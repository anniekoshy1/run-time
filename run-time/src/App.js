import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GearPage from './components/GearPage';
import TrainingPage from './components/TrainingPage';
import RecoveryPage from './components/RecoveryPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import DataForm from './components/DataForm';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gear" element={<GearPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/recovery" element={<RecoveryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dataform" element={<DataForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;