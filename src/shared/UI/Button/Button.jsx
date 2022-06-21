import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './Button.scss'
import { Link } from 'react-router-dom';

const ButtonComponent = ({ children, NavLink, modWhite, to, ...props }) => {
    const isWhite = modWhite ? styles.modWhite : '';

    if (NavLink) {
        return (
            <Link {...props} to={to} className={styles.button}>
                <span>
                    {children}
                </span>
            </Link>
        )
    }

    return (
        <button {...props} className={[styles.button, isWhite].join(' ')}>
            <span>
                {children}
            </span>
        </button>
    )
};

export const Button = hot(ButtonComponent);