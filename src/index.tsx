import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {HashRouter as Router} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// const container = document.getElementById('root') as HTMLElement
//
// const root = ReactDOMClient.createRoot(
//     container
// );
//
// root.render(
//     <Router>
//         <App />
//     </Router>
// );
if (typeof window !== 'undefined') {
    ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById("root"));
}
