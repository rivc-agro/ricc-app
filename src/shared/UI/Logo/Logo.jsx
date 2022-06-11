import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import StrapiAPI from '../../../API/StrapiAPI';

const LogoComponent = () => {
    const [result, setResult] = useState(null);

    async function fetchLogo() {
        const logoData = await StrapiAPI.getLogo();
        const url = logoData.data[0].attributes.logo.data.attributes.url;
        setResult(url);
    };

    useEffect(() => {
        fetchLogo();
    }, [setResult]);


    return (
        <img
            className="logo__img"
            src={'http://localhost:1337' + result }
            alt="RICC Logo" />
    );
};

export const Logo = hot(LogoComponent);