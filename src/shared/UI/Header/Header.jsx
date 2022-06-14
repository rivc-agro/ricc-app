import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './Header.scss';
import { Logo } from '../Logo/Logo';
import { Link  } from 'react-router-dom';

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
                <Link className={[styles.logo, 'logo'].join(' ')} to='/'>
                    <Logo />
                </Link>
                <ul className={styles.btns}>
                    {
                        NavItems.map(item =>
                            <li
                                key={item.name}
                                className={styles.btnItem}>
                                <a
                                    className={styles.btn}
                                    href={item.link}
                                >
                                    {item.name}
                                </a>
                            </li>
                        )
                    }
                    <li className={styles.btnItem}>
                        <Link className={styles.demoBtn} to='/demo'>Try Demo</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export const Header = hot(HeaderComponent);