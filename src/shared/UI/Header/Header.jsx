import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import styles from './Header.scss';
import { Logo } from '../Logo/Logo';
import { Link, useLocation } from 'react-router-dom';
import useScrollPosition from '../../../hooks/useScrollPosition';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from '../MobileMenu/MobileMenu';

const HeaderComponent = () => {
    const { pathname } = useLocation();
    const scrollPosition = useScrollPosition();
    const [menu, setMenu] = useState(false);

    const openMenu = () => {
        setMenu(true);
    };

    const closeMenu = (val) => {
        setMenu(val);
    };

    const NavItems = [{
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
    }];

    return (
        <>
            <header className={[
                styles.header,
                scrollPosition ? styles.fixed : null,
                "js-header"
            ].join(' ')}>
                <div className={styles.container + ' site-container'}>
                    <Link className={[styles.logo, 'logo'].join(' ')} to='/'>
                        <Logo />
                    </Link>
                    <button onClick={openMenu} className={[styles.burgerBtn, "js-burger-btn"].join(' ')}>
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
                                    <AnchorLink
                                        offset='100'
                                        className={styles.btn}
                                        href={item.link}
                                    >
                                        {item.name}
                                    </AnchorLink>
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
            <MobileMenu close={closeMenu}  menu={menu} NavItems={NavItems} />
        </>
    );
};

export const Header = hot(HeaderComponent);