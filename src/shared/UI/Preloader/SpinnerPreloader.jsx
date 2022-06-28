import React from 'react'
import styles from './Spinner.scss';

const SpinnerPreloader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <div></div><div></div><div></div><div></div>
            </div>
        </div>
    )
}

export default SpinnerPreloader