import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Introduction from './pages/Introduction';
import MeetingPlaces from './pages/MeetingPlaces';
import ChurchMarriage from './pages/ChurchMarriage';
import MeetingAge from './pages/MeetingAge';
import BayesianAnalysis from './pages/BayesianAnalysis';
import CLTAnalysis from './pages/CLTAnalysis';
import RegressionAnalysis from './pages/RegressionAnalysis';
import Conclusion from './pages/Conclusion';
import { useScrollToTop } from '../hooks/useScrollToTop';

function AppRouter() {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="/meeting-places" element={<MeetingPlaces />} />
      <Route path="/church-marriage" element={<ChurchMarriage />} />
      <Route path="/meeting-age" element={<MeetingAge />} />
      <Route path="/bayesian" element={<BayesianAnalysis />} />
      <Route path="/clt" element={<CLTAnalysis />} />
      <Route path="/regression" element={<RegressionAnalysis />} />
      <Route path="/conclusion" element={<Conclusion />} />
    </Routes>
  );
}

export default AppRouter;
