import React from 'react'
import styles from './Dashbord.scss';

const Dashbord = () => {
  return (
    <section className={styles.Section}>
        <h1 className={[styles.Heading, 'site-second-heading'].join(' ')}>
            Create your own dashboard and report
        </h1>
        <div className={styles.Container}>
            <div className={styles.ContainerBLock}></div>
            <div className={styles.ContainerBLock}>
                {/* <img src='' alt='' className={styles.Image} /> */}
            </div>
        </div>
    </section>
  )
}

export default Dashbord