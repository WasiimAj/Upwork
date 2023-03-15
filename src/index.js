import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyle} from "./global/style";
import ErrorBoundary from "./components/Error Boundary/index";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <GlobalStyle/>
        <App />
      
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
