import { hot } from 'react-hot-loader/root';
import React from 'react'
import styles from './Dashbord.scss';
import dashbordImg from '../../../../assets/img/dashboard.jpg';
import { Button } from '../../../UI/Button/Button';
import whyBg from '../../../../assets/img/whyBg.png';
import whyBgWebp from '../../../../assets/img/whyBg.webp';
import { PlayBtn } from '../../../UI/Icons/PlayBtn';

const DashbordComponent = () => {
  return (
    <section className={styles.section}>
      <picture>
        <source srcSet={whyBgWebp} type='image/webp' />
        <img className={styles.sectionBgImg} src={whyBg} alt="" />
      </picture>
      <h1 className={styles.heading}>
        Create your own dashboard and&nbsp;report
      </h1>
      <div className={styles.container}>
        <div className={styles.containerBLock}></div>
        <div className={styles.containerBLock}>
          <img
            src={dashbordImg}
            alt='Create your own dashboard and report'
            className={styles.image} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainerBLock}>
          <div className={styles.howItWorks}>
            <span className={styles.howItWorksheading}>
              how BI works
            </span>
            <span className={styles.howItWorksSmallHeading}>
              video about RICC
            </span>
            <button className={styles.howItWorksVideoBtn}>
              <PlayBtn className={styles.howItWorksVideoBtnIcon} />
            </button>
            <span className={styles.howItWorkscaption}>
              1m 30s
            </span>
          </div>
        </div>
        <div className={styles.textContainerBLock}>
          <p className={styles.text}>
            Our solution can combine data from all different systems and machineries under one platform with the possibility of any integration and limitless data collection.
          </p>
          <p className={styles.smallText}>
            It also visualize data to generate analysis for business reports and accurate decisions.
          </p>
          <Button NavLink to='/demo'>
            Try demo
          </Button>
        </div>
      </div>
    </section>
  )
}

export const Dashbord = hot(DashbordComponent);