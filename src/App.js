import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/JSfiles/homepage';
import DetailPage from './components/JSfiles/detailpage';
import Navbar from './components/JSfiles/header';
import './components/CSSfiles/header.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
