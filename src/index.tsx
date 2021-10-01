import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter as Router } from "react-router-dom";
import ReduxProvider from './store/darkmode/ReducerProvider';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
