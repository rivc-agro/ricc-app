import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import StrapiAPI from '../../../../API/StrapiAPI';
import styles from './Benefits.scss';
import { BenefitItem } from '../../../UI/BenefitItem/BenefitItem';

const BenefitsComponent = () => {
    const [BenefitsList, setBenefitsList] = useState([]);

    async function fetchBenefitItems() {
        const response = await StrapiAPI.getBenefits();
        setBenefitsList(response.data);
    };

    useEffect(() => {
        fetchBenefitItems();
    }, [setBenefitsList]);

    return (
        <section className={styles.benefits}>
            <div className={styles.headingContainer}>
                <div className={styles.headingBlock}>
                    <h2 className={[styles.heading, 'site-second-heading'].join(' ')}>
                        Benefits of business intelligence
                        <br />
                        <span>in agriculture</span>
                    </h2>
                </div>
                <div className={styles.headingBlock}>
                    <p className={styles.headingText}>
                        Business analysis with BI help you to use data effectively
                        to manage your farm with maximum benefit.
                    </p>
                </div>
            </div>
            <div className={styles.bodyContainer}>
                <div className={styles.bodyContainerBlock}></div>
                <div className={styles.bodyContainerBlock}>
                    <ul className={styles.list}>
                        {
                            BenefitsList.map(item =>
                                <BenefitItem 
                                    key={item.id} 
                                    class={styles.item}
                                    classImg={styles.itemImg}
                                    srcImg={'http://localhost:1337' + item.attributes.icon.data[0].attributes.url}
                                    altImg={item.attributes.icon.data[0].attributes.caption}
                                    classCaption={styles.itemCaption}
                                    caption={item.attributes.descr}
                                />
                            )
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export const Benefits = hot(BenefitsComponent);