import React, { useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SupportUs from './pages/SupportUs';


const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/supportUs' element={<SupportUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
