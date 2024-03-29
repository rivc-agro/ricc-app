import { hot } from 'react-hot-loader/root';
import React, {useContext, useEffect, useRef, useLayoutEffect } from 'react';
import styles from './intro.scss';
import sphere from '../../../../assets/img/sphere5.mp4';
import ArrowRight from '../../../UI/Icons/ArrowRight';
import IconPolygons from '../../../UI/Icons/IconPolygons';
import BtnImg from '../../../../assets/img/intro-btn-tablet2.png';
import { AppContext } from '../../../../context';
import gsap from 'gsap';
import SplitText from '../../../../assets/js/gsap-bonus/SplitText.js';
import { Link } from 'react-router-dom';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import UAE from '../../../../assets/files/UAE.pdf';

const introComponent = () => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
    const { APIdata, setAPIdata } = useContext(AppContext);
    const SplittedTex = useRef();
    const SplittedHeadingText = useRef();
    const SplittedCaptionText = useRef();
    const BtnsLayer = useRef();
    const timeLine = gsap.timeline();
    const Vid = useRef();
    let killed = false;

    const spltText = (element, splittedElement) => {
        gsap.set(element.current, {
            opacity: 1
        });

        gsap.set(splittedElement.lines, {
            overflow: 'hidden',
        });
    };

    useIsomorphicLayoutEffect(() => {
        const splitedText = new SplitText(SplittedTex.current, {
            type: 'lines, chars',
            linesClass: "line"
        });

        const splitedCaptionText = new SplitText(SplittedCaptionText.current, {
            type: 'lines, chars',
            linesClass: "line"
        });

        gsap.fromTo(SplittedHeadingText.current, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.2,
            ease: 'power3.out',
            duration: 0.9
        });

        spltText(SplittedTex, splitedText);
        spltText(SplittedCaptionText, splitedCaptionText);

        timeLine
            .fromTo(splitedText.chars, {
                yPercent: 100
            }, {
                yPercent: 0,
                duration: 0.2,
                ease: 'power3.out',
                duration: 0.9,
                delay: 0.2
            })
            .fromTo(splitedCaptionText.chars, {
                yPercent: 100
            }, {
                yPercent: 0,
                duration: 0.2,
                ease: 'power3.out',
                duration: 0.9,
            }, '-=0.7')
            .fromTo(BtnsLayer.current, {
                height: 0,
                opacity: 1
            }, {
                height: '100%',
                ease: 'power3.out',
                duration: 0.9,
            }, '-=0.7');

        ScrollTrigger.matchMedia({
            "(min-width: 1200px)": function () {
                if (!killed) {
                    gsap.to(Vid.current, {
                        scrollTrigger: {
                            trigger: Vid.current,
                            start: 'top top',
                            scrub: true,
                            // markers: true
                        },
                        scale: 0.7,
                        y: '20%',
                        transformOrigin: 'center left',
                    });
                }
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
            killed = true;
        }
    }, []);

    return (
        <section className={styles.intro}>
            <video src={sphere} className={styles.bgCircleImg} ref={Vid} playsInline muted autoPlay loop></video>
            <div className={styles.container}>
                <div className={styles.block}>
                    <p className={styles.headingText} ref={SplittedHeadingText}>
                        Business intelligence <span> in agriculture</span>
                    </p>
                </div>
                <div className={styles.block}>
                    <h1 className={styles.heading} ref={SplittedTex}>
                        {APIdata.heading}
                    </h1>
                    <p className={styles.text} ref={SplittedCaptionText}>
                        {APIdata.description}
                    </p>
                    <div className={styles.btns}>
                        <div className={styles.btnsAnimatedWrapper} ref={BtnsLayer}>
                            <Link className={styles.btnDemo} to='/demo'>
                                <img className={styles.btnDemoImg} src={BtnImg} alt="tablet" />
                                <span className={styles.btnDemoSmallText}>try the demo now</span>
                                <span className={styles.btnDemoText}>Try demo</span>
                            </Link>
                            <a href={UAE} target="_blank" className={[styles.btnDemo, styles.modMore].join(' ')}>
                                <IconPolygons width="181" height="148" className={styles.btnDemoImg} />
                                <ArrowRight width="19" height="8" className={['icon', 'icon-arrow', styles.btnDemoIcon].join(' ')} />
                                <span className={styles.btnDemoText}>Know more about our solution</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Intro = hot(introComponent);