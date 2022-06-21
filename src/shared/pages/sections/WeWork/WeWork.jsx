import { hot } from 'react-hot-loader/root';
import React from 'react'
import styles from './WeWork.scss';

const WeWorkComponent = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                How we work
            </h2>
            <div className={styles.container}>
                <div className={styles.containerTopBlock}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <p className={styles.itemText}>
                                Selection of needs for analysis
                            </p>
                        </li>
                        <li className={styles.item}>
                            <p className={styles.itemText}>
                                Сompany audit to get full insight
                            </p>
                        </li>
                        <li className={styles.item}>
                            <p className={styles.itemText}>
                                Creating of customized solution
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={styles.containerTopBlock}>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.containerBottomBlock}>
                </div>
                <div className={styles.containerBottomBlock}>
                    <ul className={[styles.list, styles.startWith4].join(' ')}>
                        <li className={styles.item}>
                            <p className={styles.itemText}>
                                BI-system implementation
                            </p>
                        </li>
                        <li className={styles.item}>
                            <p className={styles.itemText}>
                                BI-system training
                            </p>
                        </li>
                        <li className={styles.item}>
                            <p className={styles.itemText}>
                                Technical support
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export const WeWork = hot(WeWorkComponent);