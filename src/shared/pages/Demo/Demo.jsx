import React, { useState } from 'react'
import { Footer } from '../../UI/Footer/Footer'
import { Header } from '../../UI/Header/Header'
import styles from './Demo.scss';
import Laptop from '../../../assets/img/Device.png';
import { Button } from '../../UI/Button/Button';
import useScrollBlock from '../../../hooks/useScrollBlock';
import { DemoWrapper } from './inner/DemoWrapper';
import useImageLoaded from '../../../hooks/useImageLoaded';
import SpinnerPreloader from '../../UI/Preloader/SpinnerPreloader';
// import DemoBg from '../../../assets/img/DemoBg.png';

const Demo = () => {
    const [modal, setModal] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();
    const [endText, setEndText] = useState(false);
    const [ref, loaded, onLoad, setLoaded] = useImageLoaded();

    const openModal = () => {
        setModal(true);
        blockScroll();
    };

    const closeModal = (val) => {
        setModal(val);
        allowScroll();
    };

    const callback = (val) => {
        setEndText(val);
    };

    return (
        <div className="page-wrapper">
            <Header />
            <main className="page-main main">
                {/* <img src={DemoBg} className={styles.DemoBg} alt="" /> */}
                <div className="site-container">
                    <div className={styles.DemoContainerMobile}>
                        <h2>
                            To browse demo use desktop devices
                        </h2>
                    </div>
                    <div className={styles.DemoContainer}>
                        <div className={styles.demoImageWrapper}>
                            {!loaded && <SpinnerPreloader />}
                            <img
                                ref={ref}
                                src={Laptop}
                                alt="Product demo"
                                className={styles.DemoImage}
                                style={{ "display": !loaded ? "none" : "block" }} />
                        </div>
                        <div className={styles.DemoContentWrapper}>
                            {
                                !endText
                                    ?
                                    <>
                                        <h1 className={styles.DemoHeading}>
                                            Product demo
                                        </h1>
                                        <p className={styles.DemoText}>
                                            Try our product and see how it can help you to improve farming and production process.
                                        </p>
                                        <Button onClick={openModal} cls={styles.DemoBtn}>
                                            Try to analyze data with our product
                                        </Button>
                                    </>
                                    :
                                    <>
                                        <p className={styles.DemoText}>
                                            We can create an individual solution for solving any tasks and managing your enterprise.
                                        </p>
                                        <p className={styles.DemoText}>
                                            Contact us for a detailed offer.
                                        </p>
                                        <div className={styles.DemoBtns}>
                                            <Button hashLink to="#contactUs">
                                                Contact us
                                            </Button>
                                            <Button modBgImg SimpleLink to="/">
                                                Back to main
                                            </Button>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </main>
            <DemoWrapper callback={callback} openDemo={modal} close={closeModal} />
            <Footer />
        </div>
    )
}

export default Demo