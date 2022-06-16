import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './Button.scss'
import { Link } from 'react-router-dom';

const ButtonComponent = ({ children, NavLink, to, ...props }) => {
    if (NavLink) {
        return (
            <Link {...props} to={to}  className={styles.button}>
                {children}
            </Link>
        )
    }

    return (
        <button {...props} className={styles.button}>
            {children}
        </button>
    )
};

export const Button = hot(ButtonComponent);