import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './Button.scss'
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const ButtonComponent = ({ children, SimpleLink, NavLink, hashLink, modWhite, modBgImg, to, ...props }) => {
    const isWhite = modWhite ? styles.modWhite : '';
    const isTransparent = modBgImg ? styles.modTransparent : '';

    if (NavLink) {
        return (
            <Link {...props} to={to} className={[styles.button, isWhite, isTransparent].join(' ')}>
                <span>
                    {children}
                </span>
            </Link>
        )
    }

    if (SimpleLink) {
        return (
            <a {...props} href={to} className={[styles.button, isWhite, isTransparent].join(' ')}>
                <span>
                    {children}
                </span>
            </a>
        )
    }

    if (hashLink) {
        return (
            <AnchorLink offset='70' {...props} href={to} className={[styles.button, isWhite, isTransparent].join(' ')}>
                <span>
                    {children}
                </span>
            </AnchorLink>
        )
    }

    return (
        <button {...props} className={[styles.button, isWhite, isTransparent].join(' ')}>
            <span>
                {children}
            </span>
        </button>
    )
};

export const Button = hot(ButtonComponent);