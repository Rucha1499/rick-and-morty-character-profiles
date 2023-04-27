import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/appLayout/AppLayout';
import CharacterInfo from './components/characterInfo/CharacterInfo';
import './App.css';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/character/:id" element={<CharacterInfo />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
