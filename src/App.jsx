import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import FrontendLayout from './components/layouts/FrontendLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />  
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="profile" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
