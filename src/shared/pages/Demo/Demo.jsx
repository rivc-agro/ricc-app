import React from 'react'
import { Footer } from '../../UI/Footer/Footer'
import { Header } from '../../UI/Header/Header'
import styles from './Demo.scss';
import Laptop from '../../../assets/img/Device.png';
import { Button } from '../../UI/Button/Button';

const Demo = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="page-main main">
                <div className="site-container">
                    <div className={styles.DemoContainer}>
                        <img src={Laptop} alt="Product demo" className={styles.DemoImage} />
                        <div className={styles.DemoContentWrapper}>
                            <h1 className={styles.DemoHeading}>
                                Product demo
                            </h1>
                            <p className={styles.DemoText}>
                                Try our product and see how it can help you to improve farming and production process.
                            </p>
                            <Button cls={styles.DemoBtn}>
                                Try to analyze data with our product
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Demo