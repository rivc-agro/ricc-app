import { hot } from 'react-hot-loader/root';
import React from 'react'
import SliderNav from '../../../UI/SlideNav/SliderNav';
import styles from './Types.scss';
import typeImg from '../../../../assets/img/typesImage.jpg';
import btnBgLines from '../../../../assets/img/btnLines.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

const TypesComponent = () => {
    return (
        <section className={[styles.types, styles.container].join(' ')}>
            <h2 className={[styles.heading, 'site-second-heading'].join(' ')}>
                It can be used for any types of farms
                <span> and productions</span>
            </h2>
            <div className={styles.sliderContainer}>
                <div className={styles.sliderContainerBlock}>
                    <SliderNav />
                </div>
                <div className={styles.sliderContainerBlock}>
                    <Swiper className={styles.slider}
                        spaceBetween={50}
                        slidesPerView={3}
                    >
                        <SwiperSlide>
                            <div className={styles.item}>
                                <div className={styles.itemImageWrapper}>
                                    <img src={btnBgLines} className={styles.btnBgLine} alt="Crop production farms" />
                                    <img src={typeImg} className={styles.img} alt="Crop production farms" />
                                </div>
                                <span className={styles.itemCaption}>
                                    Crop production farms
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.item}>
                                <div className={styles.itemImageWrapper}>
                                    <img src={btnBgLines} className={styles.btnBgLine} alt="Crop production farms" />
                                    <img src={typeImg} className={styles.img} alt="Crop production farms" />
                                </div>
                                <span className={styles.itemCaption}>
                                    Crop production farms
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.item}>
                                <div className={styles.itemImageWrapper}>
                                    <img src={btnBgLines} className={styles.btnBgLine} alt="Crop production farms" />
                                    <img src={typeImg} className={styles.img} alt="Crop production farms" />
                                </div>
                                <span className={styles.itemCaption}>
                                    Crop production farms
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.item}>
                                <div className={styles.itemImageWrapper}>
                                    <img src={btnBgLines} className={styles.btnBgLine} alt="Crop production farms" />
                                    <img src={typeImg} className={styles.img} alt="Crop production farms" />
                                </div>
                                <span className={styles.itemCaption}>
                                    Crop production farms
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.item}>
                                <div className={styles.itemImageWrapper}>
                                    <img src={btnBgLines} className={styles.btnBgLine} alt="Crop production farms" />
                                    <img src={typeImg} className={styles.img} alt="Crop production farms" />
                                </div>
                                <span className={styles.itemCaption}>
                                    Crop production farms
                                </span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export const Types = hot(TypesComponent);