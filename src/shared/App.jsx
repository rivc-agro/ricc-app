import React from 'react';
import '../styles/App.global.scss';
import { Header } from "../shared/UI/Header/Header";
import Main from '../shared/pages/Main';
import { Footer } from '../shared/UI/Footer/Footer';

const App = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;