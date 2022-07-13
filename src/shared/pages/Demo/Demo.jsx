import React, { useState } from 'react'
import { Footer } from '../../UI/Footer/Footer'
import { Header } from '../../UI/Header/Header'
import styles from './Demo.scss';
import Laptop from '../../../assets/img/Device.png';
import { Button } from '../../UI/Button/Button';
import useScrollBlock from '../../../hooks/useScrollBlock';
import { DemoWrapper } from './inner/DemoWrapper';

const Demo = () => {
    const [modal, setModal] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();

    const openModal = () => {
        setModal(true);
        blockScroll();
    };

    const closeModal = (val) => {
        setModal(val);
        allowScroll();
    };

    return (
        <div className="page-wrapper">
            <Header />
            <main className="page-main main">
                <div className="site-container">
                    <div className={styles.DemoContainerMobile}>
                        <h2>
                            To browse demo use desktop devices
                        </h2>
                    </div>
                    <div className={styles.DemoContainer}>
                        <img src={Laptop} alt="Product demo" className={styles.DemoImage} />
                        <div className={styles.DemoContentWrapper}>
                            <h1 className={styles.DemoHeading}>
                                Product demo
                            </h1>
                            <p className={styles.DemoText}>
                                Try our product and see how it can help you to improve farming and production process.
                            </p>
                            <Button onClick={openModal} cls={styles.DemoBtn}>
                                Try to analyze data with our product
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <DemoWrapper openDemo={modal} close={closeModal} />
            <Footer />
        </div>
    )
}

export default Demo