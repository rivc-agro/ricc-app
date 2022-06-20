import { hot } from 'react-hot-loader/root';
import React from 'react'
import styles from './Integrations.scss';
import logoCompany from '../../../../assets/img/logoCompany.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Autoplay
} from "swiper";

const IntegrationsComponent = () => {
    SwiperCore.use([
        Autoplay,
    ]);

    const companys = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ];

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
                // autoplay={{ delay: 1 }}
                modules={[Autoplay]}
            >
                {
                    companys.map(item =>
                        <SwiperSlide key={item} className={styles.sliderItem}>
                            <img src={logoCompany} alt='' className={styles.sliderImg} />
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
                // autoplay={{ delay: 1 }}
                modules={[Autoplay]}
                dir={'rtl'}
            >
                {
                    companys.map(item =>
                        <SwiperSlide key={item} className={styles.sliderItem}>
                            <img src={logoCompany} alt='' className={styles.sliderImg} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    )
}

export const Integrations = hot(IntegrationsComponent);