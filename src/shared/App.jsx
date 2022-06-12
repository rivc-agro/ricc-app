import React from 'react';
import '../styles/App.global.scss';
import { Header } from "../shared/UI/Header/Header";
import Main from '../shared/pages/Main';
import { Footer } from '../shared/UI/Footer/Footer';
import Preloader from '../shared/UI/Preloader/Preloader';
import styles from './App.scss';
import { Route, Routes  } from 'react-router-dom';
import Demo from './pages/Demo';

const App = () => {
    return (
        <div className={['page-wrapper', styles.pageBg].join(' ')}>
            {/* <Preloader /> */}
            <Header />
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/demo" element={<Demo/>}/>
            </Routes>
            <Footer />
        </div >
    );
};

export default App;