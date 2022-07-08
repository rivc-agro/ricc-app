import { hot } from 'react-hot-loader/root';
import React, { useLayoutEffect, useEffect, useRef, useContext } from 'react';
import styles from './Footer.scss';
import { Form } from '../Form/Form';
import sphereVideo from '../../../assets/img/sphere5.mp4';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from '../../../assets/js/gsap-bonus/SplitText';
import Social from '../Social/Social';
import MarkWeber from '../Icons/MarkWeber';
import { AppContext } from '../../../context';

gsap.registerPlugin(SplitText, ScrollTrigger);

const FooterComponent = () => {
    const { APIdata, setAPIdata } = useContext(AppContext);
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
    const headingText = useRef();

    useIsomorphicLayoutEffect(() => {
        const splitedHeadingText1 = new SplitText(headingText.current, {
            type: 'lines, chars',
            linesClass: "line"
        });

        gsap.set(splitedHeadingText1.lines, {
            overflow: 'hidden',
        });

        gsap.fromTo(splitedHeadingText1.chars, {
            yPercent: 100
        }, {
            scrollTrigger: {
                trigger: headingText.current
            },
            yPercent: 0,
            ease: 'power3.out',
            duration: 0.9,
            delay: 0.3
        });
    }, []);

    return (
        <footer className={styles.footer} id="contactUs">
            <div className="site-container grid-container">
                <div className="grid-container__block"></div>
                <div className="grid-container__block">
                    <h2 ref={headingText} className={styles.heading}>
                        Contact us
                    </h2>
                    <div className={styles.container}>
                        <div className={styles.containerBlock}>
                            <span className={styles.legend}>
                                Want to know more about BI in&nbsp;agriculture?
                            </span>
                            <a href={"mailto:" + APIdata.infoEmail} className={styles.link}>
                                {APIdata.infoEmail}
                            </a>
                            <ul className={styles.infoList}>
                                <li className={styles.infoItem}>
                                    <span className={styles.smallLegend}>
                                        Legal representative of RICC in UAE
                                    </span>
                                    <span className={styles.smallSubLegend}>
                                        DANIT LLC
                                    </span>
                                    <a href={"mailto:" + APIdata.represnative} className={styles.link}>
                                        {APIdata.represnative}
                                    </a>
                                </li>
                                <li className={styles.infoItem}>
                                    <span className={styles.smallLegend}>
                                        Contact support
                                    </span>
                                    <a href={"mailto:" + APIdata.supportEmai} className={styles.link}>
                                        {APIdata.supportEmail}
                                    </a>
                                </li>
                                <li className={styles.infoItem}>
                                    <span className={styles.smallLegend}>
                                        Contact sales
                                    </span>
                                    <a href="mailto:sales@ricc-it.com" className={styles.link}>
                                        {APIdata.salesEmail}
                                    </a>
                                    <a href={"tel:" + APIdata.salesPhone} className={styles.link}>
                                        {APIdata.salesPhone}
                                    </a>
                                </li>
                                <li className={styles.infoItem}>
                                    <span className={styles.smallLegend}>
                                        socials
                                    </span>
                                    <Social />
                                </li>
                            </ul>
                        </div>
                        <div className={styles.containerBlock}>
                            <video src={sphereVideo} className={styles.video} playsInline muted autoPlay loop></video>
                            <Form />
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <span className={styles.copyrightItem}>
                            ALL RIGHT RESERVED 2022
                        </span>
                        <Link to='/privacy' href="/" className={styles.copyrightItem}>
                            Privacy Policy
                        </Link>

                        <a href="https://markweber.ru/" className={styles.copyrightItem} target="_blank">
                            Made by
                            <MarkWeber className={styles.copyrightImage} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export const Footer = hot(FooterComponent) 