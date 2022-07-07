import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import styles from './Dashbord.scss';
import { Button } from '../../../UI/Button/Button';
import whyBg from '../../../../assets/img/whyBg.png';
import whyBgWebp from '../../../../assets/img/whyBg.webp';
import { PlayBtn } from '../../../UI/Icons/PlayBtn';
import SpinnerPreloader from '../../../UI/Preloader/SpinnerPreloader';
import StrapiAPI from '../../../../API/StrapiAPI';
import { server } from '../../../../data/data';
import useScrollBlock from '../../../../hooks/useScrollBlock';
import gsap from 'gsap';
import SplitText from '../../../../assets/js/gsap-bonus/SplitText.js';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);
const DashbordComponent = () => {
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
  const [dashboardImage, setdashboardImage] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const videoPlayerHeading = useRef();
  const videoPlayerSubHeading = useRef();

  async function fetchDashbord() {
    const resp = await StrapiAPI.getDashboard();
    const img = resp.data[0].attributes.DashbordImage.data.attributes.url;
    setdashboardImage(img)
  };

  const openModal = () => {
    setModal(true);
    blockScroll();
  };

  const closeModal = () => {
    setModal(false);
    allowScroll();
  };

  useIsomorphicLayoutEffect(() => {
    fetchDashbord();
    setisLoading(false);

    const splitedHeading = new SplitText(videoPlayerHeading.current, {
      type: 'lines, chars',
      linesClass: "line"
    });

    const splitedSubHeading = new SplitText(videoPlayerSubHeading.current, {
      type: 'lines, chars',
      linesClass: "line"
    });

    ScrollTrigger.refresh();

    gsap.set(splitedHeading.lines, {
      overflow: 'hidden',
    });

    gsap.set(splitedSubHeading.lines, {
      overflow: 'hidden',
    });

    gsap.fromTo(splitedHeading.chars, {
      yPercent: 100
    }, {
      scrollTrigger: {
        trigger: videoPlayerHeading.current
      },
      yPercent: 0,
      ease: 'power3.out',
      duration: 0.9,
      delay: 0.3
    });

    gsap.fromTo(splitedSubHeading.chars, {
      yPercent: 100
    }, {
      scrollTrigger: {
        trigger: videoPlayerSubHeading.current
      },
      yPercent: 0,
      ease: 'power3.out',
      duration: 0.9,
      delay: 0.3
    });
  }, [setdashboardImage]);

  return (
    <section className={styles.section}>
      <picture>
        <source srcSet={whyBgWebp} type='image/webp' />
        <img className={styles.sectionBgImg} src={whyBg} alt="" />
      </picture>
      <h1 className={styles.heading}>
        Create your own dashboard and&nbsp;report
      </h1>
      <div className={styles.container}>
        <div className={styles.containerBLock}></div>
        <div className={styles.containerBLock}>
          <img
            src={[server, dashboardImage].join('')}
            height="631"
            width="1165"
            alt='Create your own dashboard and report'
            className={styles.image} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainerBLock}>
          <div className={styles.howItWorks}>
            <div className={[styles.videoBgLine, styles.videoBgLine1].join(' ')}></div>
            <div className={[styles.videoBgLine, styles.videoBgLine2].join(' ')}></div>
            <div className={[styles.videoBgLine, styles.videoBgLine3].join(' ')}></div>
            <div className={[styles.videoBgLine, styles.videoBgLine4].join(' ')}></div>
            <span className={styles.howItWorksheading} ref={videoPlayerHeading}>
              how BI works
            </span>
            <span ref={videoPlayerSubHeading} className={styles.howItWorksSmallHeading}>
              video about RICC
            </span>
            <button onClick={openModal} className={styles.howItWorksVideoBtn}>
              <PlayBtn className={styles.howItWorksVideoBtnIcon} />
            </button>
            <span className={styles.howItWorkscaption}>
              1m 30s
            </span>
          </div>
        </div>
        <div className={styles.textContainerBLock}>
          <p className={styles.text}>
            Our solution can combine data from all different systems and machineries under one platform with the possibility of any integration and limitless data collection.
          </p>
          <p className={styles.smallText}>
            It also visualize data to generate analysis for business reports and accurate decisions.
          </p>
          <Button NavLink to='/demo'>
            Try demo
          </Button>
        </div>
      </div>
      <div className={[
        styles.modal,
        modal ? styles.isAicive : null].join(' ')}>
        <div className={styles.modalContent}>
          <button onClick={closeModal} className={styles.modalCLoseBtn}>
            <span></span><span></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export const Dashbord = hot(DashbordComponent);