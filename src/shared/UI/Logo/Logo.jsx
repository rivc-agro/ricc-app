import { hot } from 'react-hot-loader/root';
import React, {useState, useEffect, useContext } from 'react';
import StrapiAPI from '../../../API/StrapiAPI';
import { AppContext } from '../../../context';

const LogoComponent = () => {
    const { APIdata, setAPIdata } = useContext(AppContext);

    return (
        <img
            className="logo__img"
            src={'http://localhost:1337' + APIdata.logo}
            alt="RICC Logo" />
    );
};

export const Logo = hot(LogoComponent);