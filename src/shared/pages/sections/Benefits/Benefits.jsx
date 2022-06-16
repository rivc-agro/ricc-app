import { hot } from 'react-hot-loader/root';
import React, { useContext, useRef, useEffect, useLayoutEffect } from 'react';
import styles from './Benefits.scss';
import { BenefitItem } from '../../../UI/BenefitItem/BenefitItem';
import { AppContext } from '../../../../context';
import { server } from '../../../../data/data';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from '../../../../assets/js/gsap-bonus/SplitText.js';

gsap.registerPlugin(ScrollTrigger, SplitText);

const BenefitsComponent = () => {
    const { APIdata, setAPIdata } = useContext(AppContext);
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
    const Heading = useRef();
    const HeadingText = useRef();

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
            duration: 0.2,
            ease: 'power3.out',
            duration: 0.9,
            delay: 0.2
        });

        gsap.fromTo(HeadingText.current, {
            y: 75,
            opacity: 0
        }, {
            scrollTrigger: {
                trigger: HeadingText.current
            },
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: 'power3.out',
            duration: 0.9,
            delay: 0.2
        });
    }, []);

    return (
        <section className={styles.benefits} id="Benefits">
            <div className={styles.headingContainer}>
                <div className={styles.headingBlock}>
                    <h2 className={[styles.heading, 'site-second-heading'].join(' ')} ref={Heading}>
                        Benefits of business intelligence
                        <br />
                        <span>in agriculture</span>
                    </h2>
                </div>
                <div className={styles.headingBlock}>
                    <p className={styles.headingText} ref={HeadingText}>
                        Business analysis with BI help you to use data effectively
                        to manage your farm with maximum benefit.
                    </p>
                </div>
            </div>
            <div className={styles.bodyContainer}>
                <div className={styles.bodyContainerBlock}></div>
                <div className={styles.bodyContainerBlock}>
                    <ul className={styles.list}>
                        {
                            APIdata.benefits.map(item =>
                                <BenefitItem
                                    key={item.id}
                                    class={styles.item}
                                    classImg={styles.itemImg}
                                    srcImg={[server, item.iconURL].join('')}
                                    altImg={item.iconCaption}
                                    classCaption={styles.itemCaption}
                                    caption={item.caption}
                                />
                            )
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export const Benefits = hot(BenefitsComponent);