import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import styles from './intro.scss';
import StrapiAPI from '../../../../API/StrapiAPI';
import ArrowRight from '../../../UI/Icons/ArrowRight';
import IconPolygons from '../../../UI/Icons/IconPolygons';
import BtnImg from '../../../../assets/img/intro-btn-tablet.png';

const introComponent = () => {
    const [heading, setHeading] = useState(null);
    const [descr, setDescr] = useState(null);

    async function fetchIntro() {
        const IntroInfo = await StrapiAPI.getIntro();
        const DataHeading = IntroInfo.data[0].attributes.heading;
        const DataDescr = IntroInfo.data[0].attributes.description;
        setHeading(DataHeading);
        setDescr(DataDescr);
    };

    useEffect(() => {
        fetchIntro();
    }, [setHeading, setDescr]);

    return (
        <section className={styles.intro}>
            <div className={styles.container}>
                <div className={styles.block}>
                    <p className={styles.headingText}>
                        Business intelligence <span> in agriculture</span>
                    </p>
                </div>
                <div className={styles.block}>
                    <h1 className="visually-hidden">START MAKING DECISIONS BASED ON ALL DATA</h1>
                    <div className={styles.heading}>
                        { heading }
                    </div>
                    <p className={styles.text}>
                        { descr }
                    </p>
                    <div className={styles.btns}>
                        <button className={styles.btnDemo}>
                            <img className={styles.btnDemoImg} src={BtnImg} alt="tablet"/>
                            <span className={styles.btnDemoSmallText}>try the demo now</span>
                            <span className={styles.btnDemoText}>Try demo</span>
                        </button>
                        <button className={[styles.btnDemo, styles.modMore].join(' ')}>
                            <IconPolygons width="181" height="148" className={styles.btnDemoImg}/>
                            <ArrowRight width="19" height="8" className={['icon', 'icon-arrow', styles.btnDemoIcon].join(' ')}  />
                            <span className={styles.btnDemoText}>Know more about our solution</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Intro = hot(introComponent);