import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import {theme} from "./assets/style/theme";
import {App} from './App';
import './assets/style/style.css'


ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
    <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

