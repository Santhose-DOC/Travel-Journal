import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Final from './components/Final';

import Asia from './Country/pages/Asia';
import Africa from './Country/pages/Africa';
import Europe from './Country/pages/Europe';
import North from './Country/pages/NorthAmerica';
import South from './Country/pages/SouthAmerica';
import Australia from './Country/pages/Australia';
import Antarctica from './Country/pages/Antarctica';
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/final" element={<Final />} />
        <Route path="/asia" element={<Asia />} />
        <Route path="/africa" element={<Africa />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/north" element={<North />} />
        <Route path="/south" element={<South />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/antarctica" element={<Antarctica />} />
        <Route path="/form" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
};

export default App;
