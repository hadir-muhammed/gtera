import React from 'react';

import './App.scss';
import AppRoutes from './routes';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <div className="push" />
      </div>

      <Footer />
    </>
  );
}

export default App;
