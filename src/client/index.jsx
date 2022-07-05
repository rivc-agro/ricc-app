import React from 'react';
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from '../shared/App';
import ScrollToTop from '../shared/UI/ScrollToTop/ScrollToTop';

window.addEventListener('load', () => {
    ReactDom.hydrate(
        <BrowserRouter>
            <ScrollToTop />
            <App serverData={window.__INITIAL_DATA__} />
        </BrowserRouter>
        ,
        document.getElementById('reactDom'))
})