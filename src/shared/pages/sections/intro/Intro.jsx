import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './intro.scss';

const introComponent = () => {
    return (
        <section className={styles.intro}>
            <div className="site-container">
                <div className={styles.container}>
                    <div className={styles.block}>
                        <p className={styles.headingText}>
                            Business intelligence 123<span> in agriculture</span>
                        </p>
                    </div>
                    <div className={styles.block}>
                        <h1 className={styles.heading}>
                            Start making decisions based on all data
                        </h1>
                        <p className={styles.text}>Business analysis with BI help you to use data effectively to manage your farm with maximum benefit.</p>
                        <div className={styles.btns}>
                            <button className={styles.btnDemo}>
                                {/* <img className="intro__btn-demo-img" src="images/intro/intro-btn-tablet.png" alt="tablet"/> */}
                                <span className={styles.btnDemoSmallText}>try the demo now</span>
                                <span className={styles.btnDemoText}>Try demo</span>
                            </button>
                            <button className={styles.btnDemo + styles.modMore}>
                                {/* <img className="intro__btn-demo-img" src="images/intro/intro-btn-polygons.svg" alt="tablet"/> */}
                                {/* <svg className="icon icon-arrow intro__btn-demo-icon" width="19" height="8">
                                <use xlink:href="images/sprites/sprite-mono.svg#arrow"></use>
                            </svg> */}
                                <span className={styles.btnDemoText}>Know more about our solution</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Intro = hot(introComponent);