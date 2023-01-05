import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import darkTheme from './theme';
import GlobalStyles from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
