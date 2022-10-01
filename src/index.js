import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Galeria from './views/Galeria'
import Favoritos from './views/Favoritos'
import NotFound from './views/NotFound';
import { States } from './hooks/DataContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <States>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Galeria' element={<Galeria />} />
            <Route path='/Favoritos' element={<Favoritos />} />
            <Route path='/*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </States>
  </React.StrictMode>
);

