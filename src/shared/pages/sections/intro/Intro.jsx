import { hot } from 'react-hot-loader/root';
import React, { useContext } from 'react';
import styles from './intro.scss';
import StrapiAPI from '../../../../API/StrapiAPI';
import ArrowRight from '../../../UI/Icons/ArrowRight';
import IconPolygons from '../../../UI/Icons/IconPolygons';
import BtnImg from '../../../../assets/img/intro-btn-tablet.png';
import { AppContext } from '../../../../context';

const introComponent = () => {
    const { APIdata, setAPIdata } = useContext(AppContext);

    return (
        <section className={styles.intro}>
            <div className={styles.container}>
                <div className={styles.block}>
                    <p className={styles.headingText}>
                        Business intelligence <span> in agriculture</span>
                    </p>
                </div>
                <div className={styles.block}>
                    <div className={styles.heading}>
                        { APIdata.heading }
                    </div>
                    <p className={styles.text}>
                        { APIdata.description }
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