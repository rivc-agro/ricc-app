import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './header.scss';

const HeaderComponent = () => {
    console.log(styles);
    return (
        <header className={styles.test}>
            <h1 className={styles.test__test}>
                Header Test
            </h1>
            <p>
                hello there
            </p>
        </header>
    );
};

export const Header = hot(HeaderComponent);