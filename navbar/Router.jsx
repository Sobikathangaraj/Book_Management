// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './ContactForm';
import Buy from './Buy';
import Navbar from './Navbar';
import BookResult from '../reduxx/BookResult';
import Bookspage from './Bookspage';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={<Bookspage/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/buy' element={<Buy />} />
        <Route path="/result" element={<BookResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
