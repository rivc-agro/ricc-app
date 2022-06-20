import { hot } from 'react-hot-loader/root';
import React from 'react'
import styles from './Dashbord.scss';
import dashbordImg from '../../../../assets/img/dashboard.jpg';
import { Button } from '../../../UI/Button/Button';

const DashbordComponent = () => {
  return (
    <section className={styles.section}>
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
        <div className={styles.textContainerBLock}></div>
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