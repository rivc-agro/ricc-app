import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';
import styles from './Header.scss';
import { Logo } from '../Logo/Logo';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const HeaderComponent = () => {
    const { pathname } = useLocation();

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
    ];

    return (
        <header className={styles.header}>
            <div className={styles.container + ' site-container'}>
                <Link className={[styles.logo, 'logo'].join(' ')} to='/'>
                    <Logo />
                </Link>
                <ul className={styles.btns}>
                    {pathname !== '/'
                        ?
                        null
                        :
                        NavItems.map(item =>
                            <li
                                key={item.name}
                                className={styles.btnItem}>
                                <HashLink
                                    className={styles.btn}
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                    to={item.link}
                                >
                                    {item.name}
                                </HashLink>
                            </li>
                        )
                    }
                    <li className={styles.btnItem}>
                        {
                            pathname !== '/'
                                ?
                                <Link className={styles.demoBtn} to='/'>
                                    Back To Main
                                </Link>
                                :
                                <Link className={styles.demoBtn} to='/demo'>
                                    Try Demo
                                </Link>
                        }

                    </li>
                </ul>
            </div>
        </header>
    );
};

export const Header = hot(HeaderComponent);