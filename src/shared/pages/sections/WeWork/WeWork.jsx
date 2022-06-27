import { hot } from 'react-hot-loader/root';
import React from 'react'
import styles from './WeWork.scss';
import bgItemFeats from '../../../../assets/img/bgItemFeats.png';

const WeWorkComponent = () => {
    const data1 = [
        {
            id: 0,
            name: 'Selection of needs for analysis'
        },
        {
            id: 1,
            name: 'Сompany audit to get full insight'
        },
        {
            id: 2,
            name: 'Creating of customized solution'
        }
    ]
    const data2 = [
        {
            id: 0,
            name: 'BI-system implementation'
        },
        {
            id: 1,
            name: 'BI-system training'
        },
        {
            id: 2,
            name: 'Technical support'
        }
    ]

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                How we work
            </h2>
            <div className={styles.container}>
                <div className={styles.containerTopBlock}>
                    <ul className={styles.list}>
                        {
                            data1.map(({id, name}) =>
                                <li key={id} className={styles.item}>
                                    <img src={bgItemFeats} alt={name} className={styles.itemBg} />
                                    <p className={styles.itemText}>
                                        {name}
                                    </p>
                                </li>
                            )
                        }
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
                        {
                            data2.map(({id, name}) =>
                                <li key={id} className={styles.item}>
                                    <img src={bgItemFeats} alt={name} className={styles.itemBg} />
                                    <p className={styles.itemText}>
                                        {name}
                                    </p>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export const WeWork = hot(WeWorkComponent);