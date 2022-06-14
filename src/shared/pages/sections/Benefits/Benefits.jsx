import { hot } from 'react-hot-loader/root';
import React, { useContext } from 'react';
import styles from './Benefits.scss';
import { BenefitItem } from '../../../UI/BenefitItem/BenefitItem';
import { AppContext } from '../../../../context';
import { server } from '../../../../data/data';

const BenefitsComponent = () => {
    const { APIdata, setAPIdata } = useContext(AppContext);

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
                            APIdata.benefits.map(item =>
                                <BenefitItem 
                                    key={item.id} 
                                    class={styles.item}
                                    classImg={styles.itemImg}
                                    srcImg={[server, item.iconURL].join('')}
                                    altImg={item.iconCaption}
                                    classCaption={styles.itemCaption}
                                    caption={item.caption}
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