import React from 'react';
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from '../shared/App';

window.addEventListener('load', () => {
    ReactDom.hydrate(
        <BrowserRouter>
            <App />
        </BrowserRouter>, document.getElementById('reactDom'))
})