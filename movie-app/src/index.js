import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom';

import './index.css';
import theme from './utils/theme'
import App from './App';



ReactDOM.render(
    <>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </>,
    document.getElementById('root')
);


