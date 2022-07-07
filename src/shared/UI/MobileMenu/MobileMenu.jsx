import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import Social from '../Social/Social';
import styles from './MobileMenu.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const MobileMenu = ({close, ...props}) => {
    const { pathname } = useLocation();

    return (
        <div className={[styles.mobileMenu, props.menu ? styles.isActive : null, "js-mobile-menu"].join(' ')}>
            <div className={["site-container", styles.mobileMenuContainer].join(' ')}>
                <div className={styles.mobileMenuHeadingWrapperr}>
                    <Link className={[styles.logo, 'logo'].join(' ')} to='/'>
                        <Logo />
                    </Link>
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
                    <button onClick={() => close(false)} className={styles.mobileMenuBtn}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className={styles.mobileMenuLegend}>
                    Want to know more about BI in agriculture?
                </div>
                <a href="mailto:info@ricc-it.com" className={styles.mobileMenuMail}>
                    info@ricc-it.com
                </a>
                <a href="tel:+79274003468" className={styles.mobileMenuTel}>+7 927 400 3468</a>
                <Social class={styles.mobileSocial} className={styles.mobileSocial} />
                {
                    pathname !== '/'
                        ?
                        null
                        :
                        <ul className={styles.mobileMenuList}>
                            {
                                props.NavItems.map(({ name, link }) =>
                                    <li key={name} className={styles.mobileMenuItem}>
                                        <AnchorLink
                                            offset='80'
                                            href={link}
                                            className={styles.mobileMenuLink}
                                            onClick={() => close(false)}
                                        >
                                            {name}
                                        </AnchorLink>
                                    </li>
                                )
                            }
                        </ul>
                }
            </div>
        </div>
    )
}

export default MobileMenu