import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './Button.scss'

const ButtonComponent = ({children, ...props}) => {
    return (
        <button {...props} className={styles.button}>
            {children}
        </button>
    )
};

export const Button = hot(ButtonComponent);