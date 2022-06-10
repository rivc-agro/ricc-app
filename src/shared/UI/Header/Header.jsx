import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './Header.scss';
import { Button } from '../Button/Button.jsx';

const HeaderComponent = () => {
    const NavItems = [
        {
            name: "Benefits",
            link: "#Benefits"
        },
        {
            name: "RICC",
            link: "#RICC",
        },
        {
            name: "Contact us",
            link: "#contactUs"
        }
    ]

    return (
        <header className={styles.header}>
            <div className={styles.container + ' site-container'}>
                <a className={styles.logo} href="">
                    <img className="logo__img" src="" alt="RICC Logo" />
                </a>
                <ul className={styles.btns}>
                    {
                        NavItems.map(item =>
                            <li key={item.name} className={styles.btnItem}>
                                <a className={styles.btn} href={item.link}>{item.name}</a>
                            </li>
                        )
                    }
                    <li className={styles.btnItem}>
                        <Button>
                            Try Demo
                        </Button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export const Header = hot(HeaderComponent);