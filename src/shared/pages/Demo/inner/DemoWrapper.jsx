import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect, useRef } from 'react'
import styles from './demoWrapper.scss';
import frame1 from '../../../../assets/img/demo/frame1.jpg';
import SpinnerPreloader from '../../../UI/Preloader/SpinnerPreloader';
import useImageLoaded from '../../../../hooks/useImageLoaded';
import demoData from '../../../../data/demoData';
import Confetti from "react-confetti";
import btn11 from '../../../../assets/img/demo/btn11.png';
import gsap from 'gsap';


const DemoWrapperComponent = ({ callback, ...props }) => {
    const [ref, loaded, onLoad, setLoaded] = useImageLoaded();
    const [frameOne, setframeOne] = useState(false);
    const [image, setImage] = useState(frame1);
    const [mask, setMask] = useState(demoData[0]);
    const BtnImg1 = useRef();
    const BtnImg2 = useRef();
    const BtnImg3 = useRef();
    const btnDemo = useRef();
    const timeline = gsap.timeline();


    const handleNextBtn = () => {
        if (demoData[mask.nextStep]) {
            let nextStep = demoData[mask.nextStep].key;
            setframeOne(false);
            setLoaded(false);
            setImage(demoData[nextStep].nextImage);
            setMask(demoData[nextStep]);
        }

        if (demoData[mask.key + 1]) {
            setMask(demoData[mask.key + 1]);
        }

        if (demoData[mask.key].isLastSlide) {
            setframeOne(false);
            setLoaded(false);
            setMask(demoData[0]);
            setImage(frame1);
            props.close(false);
            callback(true);
        };
    };

    const handCloseBtn = () => {
        setframeOne(false);
        setLoaded(false);
        setMask(demoData[0]);
        setImage(frame1);
        props.close(false);
    };

    const handleBackBtn = () => {
        setMask(demoData[mask.key - 1]);

        if (demoData[mask.key].key === 1) return;

        if (demoData[mask.key - 2].prevFrame) {
            setImage(demoData[mask.key - 2].prevFrame);
        };
    };

    useEffect(() => {
        if (props.openDemo && loaded) {
            const timer = setTimeout(() => {
                setframeOne(true);
            }, 1200);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [props.openDemo, loaded]);

    useEffect(() => {
        if (mask.isAnimBtn) {
            gsap.set(btnDemo.current, {display: "none"});
            timeline
                .to(BtnImg1.current, {opacity: 1, duration: 0.5, ease: "none"})
                .to(BtnImg1.current, {opacity: 0, duration: 0.3, ease: "none"}, "+=0.5")
                .to(BtnImg2.current, {opacity: 1, duration: 0.5, ease: "none"}, "-=0.3")
                .to(BtnImg2.current, {opacity: 0, duration: 0.3, ease: "none"}, "+=0.5")
                .to(BtnImg3.current, {opacity: 1, duration: 0.5, ease: "none"}, "-=0.3")
                .to(BtnImg3.current, {opacity: 0, duration: 0.3, ease: "none"}, "+=0.5")
                .to(btnDemo.current, {opacity: 1, display: "block", duration: 0.3, ease: "none"})
        }
    }, [props.openDemo, mask]);

    if (!props.openDemo) {
        return null;
    }
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                <li className={styles.item}>

                    {!loaded && <SpinnerPreloader />}

                    <div className={styles.itemInner} style={{ "display": !loaded ? "none" : "block" }}>
                        <img ref={BtnImg1} src={btn11} alt="" className={[styles.animBtn1, styles.animBtn].join(' ')} />
                        <img ref={BtnImg2} src={btn11} alt="" className={[styles.animBtn2, styles.animBtn].join(' ')} />
                        <img ref={BtnImg3} src={btn11} alt="" className={[styles.animBtn3, styles.animBtn].join(' ')} />

                        <button
                            onClick={handCloseBtn}
                            className={styles.closeBtn}
                            title='Close Demo'
                        />

                        <button
                            onClick={handleBackBtn}
                            className={styles.backBtn}
                            style={{ "display": demoData[mask.key].key === 0 ? "none" : "block" }}
                            title='Back'
                        />

                        <img
                            ref={ref}
                            onLoad={onLoad}
                            src={image}
                            className={styles.frame}
                            alt="First frame"
                            style={{ "display": !loaded ? "none" : "block" }}
                        />

                        <div className={[styles.frame1Wrapper, frameOne ? styles.isActive : null].join(' ')}>
                            {mask.isLastSlide && <Confetti />}
                            {
                                demoData.map(({ key, file, ...restItems }) =>
                                    <div
                                        key={key}
                                        className={styles.fram1area}
                                        style={{ 'backgroundImage': `url(${file})`, 'opacity': key === mask.key ? '1' : 0 }}
                                    ></div>
                                )
                            }
                            <div
                                className={[styles.popup,
                                mask.isCentered ? styles.centered : null,
                                mask.isLong ? styles.long : null,
                                mask.isArrowRight ? styles.arrowRight : null,
                                mask.isArrowBottom ? styles.arrowBottom : null,
                                mask.isArrowLeft ? styles.arrowLeft : null,
                                mask.smallPopup ? styles.smallPopup : null,].join(' ')}
                                style={{ "top": mask.popupPosition[0], "left": mask.popupPosition[1] }}
                            >
                                {
                                    mask.isIcon
                                        ?
                                        <div className={styles.popupIcon}>
                                            {mask.icon}
                                        </div>
                                        : null
                                }

                                <p>{mask.text}</p>

                                <button
                                    onClick={handleNextBtn}
                                    className={styles.btn}
                                    ref={btnDemo}
                                >
                                    {
                                        mask.btnText
                                            ? mask.btnText
                                            : "Next"
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export const DemoWrapper = hot(DemoWrapperComponent);