import React, {useEffect, useState} from 'react';
import '../styles/App.global.scss';
import { Header } from "../shared/UI/Header/Header";
import Main from '../shared/pages/Main';
import { Footer } from '../shared/UI/Footer/Footer';
import styles from './App.scss';

const App = () => {
    return (
        <div className={['page-wrapper', styles.pageBg].join(' ')}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;