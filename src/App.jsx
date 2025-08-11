import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PrivacyPolicy from './PrivacyPolicy';
import LicenseAgreement from './LicenseAgreement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/license" element={<LicenseAgreement />} />
      </Routes>
    </Router>
  );
}

export default App;
