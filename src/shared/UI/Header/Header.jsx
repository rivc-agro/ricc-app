import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';
import styles from './Header.scss';
import { Logo } from '../Logo/Logo';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useScrollPosition from '../../../hooks/useScrollPosition';

const HeaderComponent = () => {
    const { pathname } = useLocation();
    const scrollPosition = useScrollPosition();

    const NavItems = [{
        name: "Benefits",
        link: ""
    },
    {
        name: "RICC",
        link: "",
    },
    {
        name: "Contact us",
        link: ""
    }];
    
    return (
        <header className={[
            styles.header,
            scrollPosition ? styles.fixed : null
        ].join(' ')}>
            <div className={styles.container + ' site-container'}>
                <Link className={[styles.logo, 'logo'].join(' ')} to='/'>
                    <Logo />
                </Link>
                <button className={styles.burgerBtn}>
                    <span></span><span></span><span></span>
                </button>
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
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
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