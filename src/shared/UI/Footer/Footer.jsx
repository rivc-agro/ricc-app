import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './Footer.scss';
import WhatsUp from '../../UI/Icons/WhatsUp';
import Twitter from '../../UI/Icons/Twitter';
import Facebook from '../../UI/Icons/Facebook';
import { Form } from '../Form/Form';
import MarkWeber from '../../../assets/img/MarkWeber.svg';
import sphereVideo from '../../../assets/img/sphere5.mp4';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <footer className={styles.footer} id="contactUs">
            <div className="site-container grid-container">
                <div className="grid-container__block"></div>
                <div className="grid-container__block">
                    <h2 className={styles.heading}>
                        Contact us
                    </h2>
                    <div className={styles.container}>
                        <div className={styles.containerBlock}>
                            <span className={styles.legend}>
                                Want to know more about BI in&nbsp;agriculture?
                            </span>
                            <a href="mailto:info@ricc-it.com" className={styles.link}>
                                info@ricc-it.com
                            </a>
                            <ul className={styles.infoList}>
                                <li className={styles.infoItem}>
                                    <span className={styles.smallLegend}>
                                        Contact support
                                    </span>
                                    <a href="mailto:support@ricc-it.com" className={styles.link}>
                                        support@ricc-it.com
                                    </a>
                                </li>
                                <li className={styles.infoItem}>
                                    <span className={styles.smallLegend}>
                                        Contact sales
                                    </span>
                                    <a href="mailto:sales@ricc-it.com" className={styles.link}>
                                        sales@ricc-it.com
                                    </a>
                                    <a href="tel:+79274003468" className={styles.link}>
                                        +7 927 400 3468
                                    </a>
                                </li>
                                <li className={styles.infoItem}>
                                    <span className={styles.smallLegend}>
                                        socials
                                    </span>
                                    <ul className={styles.socialList}>
                                        <li className={styles.socialItem}>
                                            <a href="/" className={styles.socialLink}>
                                                <WhatsUp
                                                    width='32'
                                                    height='32'
                                                    className={styles.socialLinkIcon} />
                                            </a>
                                        </li>
                                        <li className={styles.socialItem}>
                                            <a href="/" className={styles.socialLink}>
                                                <Twitter
                                                    width='32'
                                                    height='32'
                                                    className={styles.socialLinkIcon} />
                                            </a>
                                        </li>
                                        <li className={styles.socialItem}>
                                            <a href="/" className={styles.socialLink}>
                                                <Facebook
                                                    width='32'
                                                    height='32'
                                                    className={styles.socialLinkIcon} />
                                            </a>
                                        </li>
                                    </ul>
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

                        <a href="/" className={styles.copyrightItem}>
                            Made by
                            <img src={MarkWeber} alt='Website made by MarkWeber company' className={styles.copyrightImage} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export const Footer = hot(FooterComponent) 