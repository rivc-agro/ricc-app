import { hot } from 'react-hot-loader/root';
import React from 'react'
import styles from './WhyUs.scss';
import logo from '../../../../assets/img/ricc-logo-gradient.svg'
import { Button } from '../../../UI/Button/Button';

const WhyUsComponent = () => {
  return (
    <section className={styles.section}>
      <h2 className='visually-hidden'>Why RICC</h2>
      <div className={styles.headingContainer}>
        <div className={styles.headingWhy}>
          why
        </div>
        <img src={logo} alt='RICC Logo' className={styles.headingLogo} />
        <div className={styles.headingRicc}>
          RICC
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.containerBlock}></div>
        <div className={styles.containerBlock}>
          <ul className={styles.list}>
            <li className={styles.item}>
              50 years of working with data in agriculture
            </li>
            <li className={styles.item}>
              Create business analysis for different goals
            </li>
            <li className={styles.item}>
              More than 3 500 agro producers use our IT-solutions and are accompanied by us
            </li>
          </ul>
          <div className={styles.btns}>
            <Button>
              contACT us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export const WhyUs = hot(WhyUsComponent);