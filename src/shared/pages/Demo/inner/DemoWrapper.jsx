import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect, useRef } from 'react'
import styles from './demoWrapper.scss';
import frame1 from '../../../../assets/img/demo/frame1.jpg';
import SpinnerPreloader from '../../../UI/Preloader/SpinnerPreloader';
import useImageLoaded from '../../../../hooks/useImageLoaded';
import demoData from '../../../../data/demoData';

const DemoWrapperComponent = ({ ...props }) => {
    const [ref, loaded, onLoad, setLoaded] = useImageLoaded();
    const [frameOne, setframeOne] = useState(false);
    const [image, setImage] = useState(frame1);
    const [mask, setMask] = useState(demoData[0]);

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
    };

    const handleCloseBtn = () => {
        setframeOne(false);
        setLoaded(false);
        setMask(demoData[0]);
        setImage(frame1);
        props.close(false);
    };

    useEffect(() => {
        if (props.openDemo && loaded) {
            const timer = setTimeout(() => {
                setframeOne(true);
            }, 2000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [props.openDemo, loaded]);

    if (!props.openDemo) {
        return null;
    }
    return (
        <div className={styles.wrapper}>
            <button onClick={handleCloseBtn} className={styles.closeBtn} />
            <ul className={styles.list}>
                <li className={styles.item}>

                    {!loaded && <SpinnerPreloader />}

                    <div className={styles.itemInner} style={{ "display": !loaded ? "none" : "block" }}>

                        <img
                            ref={ref}
                            onLoad={onLoad}
                            src={image}
                            className={styles.frame}
                            alt="First frame"
                            style={{ "display": !loaded ? "none" : "block" }}
                        />

                        <div className={[styles.frame1Wrapper, frameOne ? styles.isActive : null].join(' ')}>
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