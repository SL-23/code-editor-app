import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter as Router } from "react-router-dom";
import ReduxProvider from './store/darkmode/ReducerProvider';
import CustomThemeProvider from './theme/CustomThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <AuthProvider>
          <CustomThemeProvider>
            <App />
          </CustomThemeProvider>
        </AuthProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
