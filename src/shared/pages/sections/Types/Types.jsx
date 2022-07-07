import { hot } from 'react-hot-loader/root';
import React, { useEffect, useContext, useRef, useLayoutEffect } from 'react'
import SliderNav from '../../../UI/SlideNav/SliderNav';
import styles from './Types.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Navigation,
} from "swiper";
import { server } from '../../../../data/data';
import { AppContext } from '../../../../context';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from '../../../../assets/js/gsap-bonus/SplitText.js';
import FadeIn from '../../../UI/FadeIn/FadeIn';

gsap.registerPlugin(ScrollTrigger, SplitText);
SwiperCore.use([
    Navigation,
]);

const TypesComponent = () => {
    const { SlidesList, setSlidesList } = useContext(AppContext);
    const Heading = useRef();
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

    useIsomorphicLayoutEffect(() => {
        const SplitedText = new SplitText(Heading.current, {
            type: 'lines, chars',
            linesClass: "line"
        });

        gsap.set(SplitedText.lines, {
            overflow: 'hidden',
        });

        gsap.fromTo(SplitedText.chars, {
            yPercent: 100
        }, {
            scrollTrigger: {
                trigger: Heading.current
            },
            yPercent: 0,
            ease: 'power3.out',
            duration: 0.9,
            delay: 0.2
        });
    }, []);

    return (

        <section className={[styles.types, styles.container].join(' ')}>
            <h2 className={[styles.heading, 'site-second-heading'].join(' ')} ref={Heading}>
                It can be used for any types of farms
                and&nbsp;productions
            </h2>
            <FadeIn>
                <div className={styles.sliderContainer}>
                    <div className={styles.sliderContainerBlock}>
                        <SliderNav
                            classes={{ prev: "types-swiper-button-prev", next: "types-swiper-button-next" }}
                        />
                    </div>
                    <div className={styles.sliderContainerBlock}>
                        <Swiper className={styles.slider}
                            spaceBetween={0}
                            slidesPerView={3}
                            navigation={{
                                nextEl: ".types-swiper-button-next",
                                prevEl: ".types-swiper-button-prev",
                            }}
                            breakpoints={{
                                280: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 10
                                },
                                768: {
                                    slidesPerView: 3.1,
                                }
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
            </FadeIn>
        </section>
    )
}

export const Types = hot(TypesComponent);