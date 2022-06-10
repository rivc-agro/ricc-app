import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './Footer.scss';

const FooterComponent = () => {
    return (
        <footer className={styles.footer}>
            <div className="site-container">
                <h1>footer</h1>
            </div>
        </footer>
    );
};

export const Footer = hot(FooterComponent) 