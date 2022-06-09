import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './Header.scss';

const HeaderComponent = () => {
    console.log(styles);
    return (
        <header className={styles.header}>
            <div className={styles.container += " site-container"}>
                <a className={styles.logo} href="/">
                    {/* <img className="logo__img" src="images/logo.svg" alt="RICC Logo"> */}
                </a>
                <ul className={styles.btns}>
                    <li className={styles.btnItem}>
                        <a className={styles.btn} href="/">Benefits</a>
                    </li>
                    <li className={styles.btnItem}>
                        <a className={styles.btn} href="/">RICC</a>
                        </li>
                    <li className={styles.btnItem}>
                        <a className={styles.btn} href="/">Contact us</a>
                        </li>
                    <li className={styles.btnItem}>
                        <button className="button">Try demo</button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export const Header = hot(HeaderComponent);