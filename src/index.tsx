import React from 'react';
import App from './app';
import {HashRouter as Router} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot} from "react-dom/client";

if (typeof window !== 'undefined') {
    const container = document.getElementById('root')
    const root = createRoot(container!)
    root.render(
        <Router>
            <App />
        </Router>)
}
