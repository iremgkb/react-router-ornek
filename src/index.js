import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Anasayfa from './Anasayfa';
import Hakkinda from './Hakkinda';
import Iletisim from './Iletisim';
import NotFound from './NotFound';
import Ozgecmis from './Ozgecmis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<App />}>
    <Route index element = {<Anasayfa />} /> 
    <Route path='hakkinda'>
      <Route index element={<Hakkinda />} />
      <Route path="ozgecmis" element={<Ozgecmis />} />     
    </Route>
    <Route path='iletisim' element = {<Iletisim />} /> 
  </Route>
    <Route path='*' element={<NotFound />} />
</Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
