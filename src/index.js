import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Library from './components/Library/Library';
import About from './components/About/About';
import Thoughts from './components/Thoughts/Thoughts';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="library" element={<Library />}/>
          <Route path="about" element={<About />} />
          <Route path="thoughts" element={<Thoughts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  </React.StrictMode>
);

