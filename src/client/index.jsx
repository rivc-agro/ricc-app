import React from 'react';
import ReactDom from "react-dom";
import App from '../shared/App';

window.addEventListener('load', () => {
    ReactDom.hydrate(<App/>, document.getElementById('reactDom'))
})