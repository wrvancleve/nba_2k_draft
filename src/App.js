import './styles/App.css';
import Setup from './components/setup/Setup'
import Draft from './components/draft/Draft'
import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='bg'></div>
      <Routes>
        <Route exact path="/" element={<Setup />} />
        <Route exact path="/draft" element={<Draft />} />
      </Routes>
    </>
  );
}

export default App;
