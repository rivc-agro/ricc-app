import { hot } from 'react-hot-loader/root';
import React, { useState, useLayoutEffect, useEffect } from 'react'
import styles from './WeWork.scss';
import bgItemFeats from '../../../../assets/img/bgItemFeats.png';
import StrapiAPI from '../../../../API/StrapiAPI';

const WeWorkComponent = () => {
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
    const [works, setWorks] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    async function fetchWorks() {
        const resp = await StrapiAPI.getWorks();
        const works = resp.data;
        const worksArr = [];

        for (const [index, text] of works.entries()) {
            worksArr.push({
                id: index,
                text: text.attributes.Text
            });
        };

        setWorks(worksArr);
    };

    useIsomorphicLayoutEffect(() => {
        fetchWorks();
    }, []);

    useIsomorphicLayoutEffect(() => {
        const data1Arr = [];
        const data2Arr = [];

        for (const [index, item] of works.entries()) {
            if (index <= 2) {
                data1Arr.push({
                    id: item.id,
                    text: item.text
                });
            } else {
                data2Arr.push({
                    id: item.id,
                    text: item.text
                });
            }
        };

        setData1(data1Arr);
        setData2(data2Arr);
    }, [works]);

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>
                How we work
            </h2>
            <div className={styles.mobileContainer}>
                <ul className={styles.list}>
                    {
                        works.map(({ id, text }) =>
                            <li key={id} className={styles.item}>
                                <img src={bgItemFeats} alt={text} className={styles.itemBg} />
                                <p className={styles.itemText}>
                                    {text}
                                </p>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className={styles.descktopContainer}>
                <div className={styles.container}>
                    <div className={styles.containerTopBlock}>
                        <ul className={styles.list}>
                            {
                                data1.map(({ id, text }) =>
                                    <li key={id} className={styles.item}>
                                        <img src={bgItemFeats} alt={text} className={styles.itemBg} />
                                        <p className={styles.itemText}>
                                            {text}
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
                                data2.map(({ id, text }) =>
                                    <li key={id} className={styles.item}>
                                        <img src={bgItemFeats} alt={text} className={styles.itemBg} />
                                        <p className={styles.itemText}>
                                            {text}
                                        </p>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}

export const WeWork = hot(WeWorkComponent);