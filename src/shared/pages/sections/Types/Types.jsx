import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react'
import SliderNav from '../../../UI/SlideNav/SliderNav';
import styles from './Types.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Navigation,
} from "swiper";
import StrapiAPI from '../../../../API/StrapiAPI';
import { server } from '../../../../data/data';

const TypesComponent = () => {
    const [SlidesList, setSlidesList] = useState([]);

    async function fetchSlidesList() {
        const resp = await StrapiAPI.getTypesSliders();
        setSlidesList(resp.data);
    };

    useEffect(() => {
        fetchSlidesList();
    }, [setSlidesList]);

    SwiperCore.use([
        Navigation,
    ]);

    return (
        <section className={[styles.types, styles.container].join(' ')}>
            <h2 className={[styles.heading, 'site-second-heading'].join(' ')}>
                It can be used for any types of farms
                <span> and productions</span>
            </h2>
            <div className={styles.sliderContainer}>
                <div className={styles.sliderContainerBlock}>
                    <SliderNav 
                        classes={{prev: "types-swiper-button-prev", next: "types-swiper-button-next"}} 
                    />
                </div>
                <div className={styles.sliderContainerBlock}>
                    <Swiper className={styles.slider}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation={{
                            nextEl: ".types-swiper-button-next",
                            prevEl: ".types-swiper-button-prev",
                        }}
                    >
                        {
                            SlidesList.map(item =>
                                <SwiperSlide key={item.id}>
                                    <div className={styles.item}>
                                        <div className={styles.itemImageWrapper}>
                                            <div className={[styles.itemImageBg, styles.itemImageBg1].join(' ')}></div>
                                            <div className={[styles.itemImageBg, styles.itemImageBg2].join(' ')}></div>
                                            <div className={[styles.itemImageBg, styles.itemImageBgDot, styles.itemImageBgDot1].join(' ')}></div>
                                            <div className={[styles.itemImageBg, styles.itemImageBgDot, styles.itemImageBgDot2].join(' ')}></div>
                                            <div className={[styles.itemImageBg, styles.itemImageBgDot, styles.itemImageBgDot3].join(' ')}></div>
                                            <img
                                                src={[server, item.attributes.Image.data.attributes.url].join('')}
                                                className={styles.img}
                                                alt={item.attributes.Image.data.attributes.url} />
                                        </div>
                                        <span className={styles.itemCaption}>
                                            {item.attributes.Caption}
                                        </span>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export const Types = hot(TypesComponent);