import React from 'react';
import ReactDom from "react-dom";
import { Header } from "../shared/UI/Header/Header";

window.addEventListener('load', () => {
    ReactDom.hydrate(<Header/>, document.getElementById('reactDom'))
})