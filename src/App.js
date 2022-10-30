import React from 'react';
import './App.css';
import { Home } from './pages/Home/Home';
import { Header } from './components/header/Header.jsx'
import {Footer} from './components/footer/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddBill } from './pages/add-bill/AddBill';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-bill' element={<AddBill />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
