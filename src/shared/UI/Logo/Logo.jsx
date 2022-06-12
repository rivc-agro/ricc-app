import { hot } from 'react-hot-loader/root';
import React, {useState, useEffect, useContext } from 'react';
import StrapiAPI from '../../../API/StrapiAPI';

const LogoComponent = () => {
    const [logo, setLogo] = useState(null);

    async function fetchLogo() {
        const logoData = await StrapiAPI.getLogo();
        const url = logoData.data[0].attributes.logo.data.attributes.url;
        setLogo(url);
    };

    useEffect(() => {
        fetchLogo();
    }, [setLogo]);

    return (
        <img
            className="logo__img"
            src={'http://localhost:1337' + logo }
            alt="RICC Logo" />
    );
};

export const Logo = hot(LogoComponent);