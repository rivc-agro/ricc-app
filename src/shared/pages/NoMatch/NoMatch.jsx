import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../UI/Button/Button'
import { Footer } from '../../UI/Footer/Footer'
import { Header } from '../../UI/Header/Header'
import styles from './NoMatch.scss';
import img from '../../../assets/img/erorr-not-found.svg';
import errorBg from '../../../assets/img/errorBg.png';
import errorBgWebp from '../../../assets/img/errorBg.webp';

const NoMatch = () => {
    return (
        <div className="page-wrapper no-bg">
            <Header />
            <main className="page-main main">
                <div className="site-container grid-container">
                    <div className="grid-container__block"></div>
                    <div className="grid-container__block">
                        <section className={styles.section}>
                            <picture>
                                <source srcSet={errorBgWebp} type='image/webp' />
                                <img className={styles.sectionBgImg} src={errorBg} alt="" />
                            </picture>
                            <h1 className={styles.heading}>
                                Page Not Found
                            </h1>
                            <p className={styles.text}>
                                The page you are looking for doesn't exist or has been moved
                            </p>
                            <Button modWhite NavLink to='/'>
                                back home
                            </Button>
                            <img src={img} alt="The page you are looking for doesn't exist or has been moved" className={styles.img} />
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default NoMatch