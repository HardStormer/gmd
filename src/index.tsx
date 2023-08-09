import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(
    container
);

root.render(
    <Router>
        <App />
    </Router>
);

