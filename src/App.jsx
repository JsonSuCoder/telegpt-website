import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HomePage from './page/home/HomePage';
import PrivacyPolicy from './page/privacy/PrivacyPolicy';
import LicenseAgreement from './page/license/LicenseAgreement';
import { UseCasePage } from './page/use-case';
import { PricePage } from './page/price';
import { SkillPage } from './page/skill';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/license" element={<LicenseAgreement />} />
        <Route path="/use-case" element={<UseCasePage />} />
        <Route path="/pricing" element={<PricePage />} />
        <Route path="/skills" element={<SkillPage />} />
      </Routes>
    </Router>
  );
}

export default App;
