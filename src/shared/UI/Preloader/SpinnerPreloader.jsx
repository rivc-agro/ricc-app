import React from 'react'
import styles from './Spinner.scss';

const SpinnerPreloader = () => {
    return (
        <div className={styles.spinner}>
            <div></div><div></div><div></div><div></div>
        </div>
    )
}

export default SpinnerPreloader