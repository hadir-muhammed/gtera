import React from 'react';

import './App.scss';
import AppRoutes from './components/AppRoutes/AppRoutes';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
