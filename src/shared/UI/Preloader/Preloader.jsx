import React from 'react';
import Logo from '../../../assets/img/logo.svg';
import styles from './Preloader.scss';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={Logo} alt="Company Logo" />
        </div>
    );
};

export default Preloader;