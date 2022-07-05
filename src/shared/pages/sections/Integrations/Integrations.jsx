import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react'
import styles from './Integrations.scss';
import logoCompany from '../../../../assets/img/logoCompany.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Autoplay
} from "swiper";
import { server } from '../../../../data/data';
import StrapiAPI from '../../../../API/StrapiAPI';
import LazyLoadComponentWrapper from '../../../UI/LazyLoadComponent/LazyLoadComponentWrapper';

const IntegrationsComponent = () => {
    SwiperCore.use([
        Autoplay,
    ]);

    const [SoursesFirst, setSoursesFirst] = useState([]);
    const [SoursesSecond, setSoursesSecond] = useState([]);

    async function fetchSourses() {
        const resp = await StrapiAPI.getSourses();
        const First = resp.data[0].attributes.sourseFirstRow.data;
        const Second = resp.data[0].attributes.sourseSecondRow.data;
        setSoursesFirst(First);
        setSoursesSecond(Second);
    };

    useEffect(() => {
        fetchSourses();
    }, [setSoursesFirst, setSoursesSecond]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.containerBlock}></div>
                <div className={styles.containerBlock}>
                    <p className={styles.text}>
                        Integrate with 130+
                        <br /> commonly used data sources
                    </p>
                </div>
            </div>
            <Swiper
                className={[styles.slider, 'swiper-linear'].join(' ')}
                spaceBetween={8}
                slidesPerView={'auto'}
                initialSlide={4}
                speed={8000}
                loop={true}
                allowTouchMove={false}
                autoplay={{ delay: 1 }}
                loopedSlides={17}
                modules={[Autoplay]}
            >
                {
                    SoursesFirst.map((item) =>
                        <SwiperSlide key={item.id} className={styles.sliderItem}>
                            <img
                                src={[server, item.attributes.url].join('')}
                                alt={item.attributes.caption}
                                className={styles.sliderImg} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
            <Swiper
                className={[styles.slider, 'swiper-linear'].join(' ')}
                spaceBetween={8}
                slidesPerView={'auto'}
                initialSlide={9}
                speed={8000}
                loop={true}
                allowTouchMove={false}
                autoplay={{ delay: 1 }}
                modules={[Autoplay]}
                loopedSlides={17}
                dir={'rtl'}
            >
                {
                    SoursesSecond.map((item) =>
                        <SwiperSlide key={item.id} className={styles.sliderItem}>
                            <img
                                src={[server, item.attributes.url].join('')}
                                alt={item.attributes.caption}
                                className={styles.sliderImg} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    )
}

export const Integrations = hot(IntegrationsComponent);