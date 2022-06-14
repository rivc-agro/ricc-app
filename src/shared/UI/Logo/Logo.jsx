import { hot } from 'react-hot-loader/root';
import React, {useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../context';
import { server } from '../../../data/data';

const LogoComponent = () => {
    const { APIdata, setAPIdata } = useContext(AppContext);

    return (
        <img
            className="logo__img"
            src={[ server ,APIdata.logo].join('')}
            alt="RICC Logo" />
    );
};

export const Logo = hot(LogoComponent);