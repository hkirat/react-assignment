import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Landingpage from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Landingpage/>
  </BrowserRouter>

)
