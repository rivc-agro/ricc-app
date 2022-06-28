import React, { useEffect, useState } from 'react';
import '../styles/App.global.scss';
import '../assets/favicon/apple-touch-icon.png';
import '../assets/favicon/favicon-32x32.png';
import '../assets/favicon/favicon-16x16.png';
import '../assets/favicon/android-chrome-192x192.png';
import '../assets/favicon/android-chrome-512x512.png';
import '../assets/img/page-bg.png';
import '../assets/favicon/safari-pinned-tab.svg';
import Main from '../shared/pages/Main';
import { Route, Routes, useLocation } from 'react-router-dom';
import Demo from './pages/Demo/Demo';
import { AppContext } from '../context';
import StrapiAPI from '../API/StrapiAPI'
import NoMatch from './pages/NoMatch/NoMatch';
import Privacy from './pages/Privacy/Privacy';
import Preloader from './UI/Preloader/Preloader';
import SpinnerPreloader from './UI/Preloader/SpinnerPreloader';

const App = ({ serverData }) => {
    const [APIdata, setAPIdata] = useState(serverData);
    const [SlidesList, setSlidesList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    async function fetchSlidesList() {
        const resp = await StrapiAPI.getTypesSliders();
        setSlidesList(resp.data);
    };
    useEffect(() => {
        fetchSlidesList();
        setLoading(false);
    }, [setSlidesList]);

    return (
        <AppContext.Provider value={{
            APIdata,
            setAPIdata,
            SlidesList,
            setSlidesList
        }}>
            {/* {isLoading && <SpinnerPreloader />} */}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </AppContext.Provider>
    );
};

export default App;