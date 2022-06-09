import { hot } from 'react-hot-loader/root';

import React from 'react';

const HeaderComponent = () => {
    return (
        <header>
            <h1>
                Header Test
            </h1>
            <p>
                hello there
            </p>
        </header>
    );
};

export const Header = hot(HeaderComponent);