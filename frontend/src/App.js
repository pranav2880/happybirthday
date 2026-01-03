import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LockPage from './components/LockPage/LockPage';
import BirthdayReveal from './components/BirthdayReveal/BirthdayReveal';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LockPage />} />
      <Route path="/reveal" element={<BirthdayReveal />} />
    </Routes>
  );
}
