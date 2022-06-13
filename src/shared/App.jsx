import React, { useContext, useState } from 'react';
import '../styles/App.global.scss';
import { Header } from "../shared/UI/Header/Header";
import Main from '../shared/pages/Main';
import { Footer } from '../shared/UI/Footer/Footer';
import Preloader from '../shared/UI/Preloader/Preloader';
import styles from './App.scss';
import { Route, Routes } from 'react-router-dom';
import Demo from './pages/Demo';
import '../assets/favicon/apple-touch-icon.png';
import '../assets/favicon/favicon-32x32.png';
import '../assets/favicon/favicon-16x16.png';
import '../assets/favicon/android-chrome-192x192.png';
import '../assets/favicon/android-chrome-512x512.png';
// import '../assets/favicon/site.webmanifest';
import '../assets/favicon/safari-pinned-tab.svg';
import { AppContext } from '../context';


const App = ({ serverData }) => {
    const [APIdata, setAPIdata] = useState(serverData);

    return (
        <AppContext.Provider value={{
            APIdata,
            setAPIdata
        }}>
            <div className={['page-wrapper', styles.pageBg].join(' ')}>
                {/* <Preloader /> */}
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/demo" element={<Demo />} />
                </Routes>
                <Footer />
            </div >
        </AppContext.Provider>
    );
};

export default App;