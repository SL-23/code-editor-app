import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter as Router } from "react-router-dom";
import StoreProvider from './store/StoreProvider';
import CustomThemeProvider from './theme/CustomThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <AuthProvider>
          <CustomThemeProvider>
            <App />
          </CustomThemeProvider>
        </AuthProvider>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
