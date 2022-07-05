import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react'
import styles from './Dashbord.scss';
import dashbordImg from '../../../../assets/img/dashboard.jpg';
import { Button } from '../../../UI/Button/Button';
import whyBg from '../../../../assets/img/whyBg.png';
import whyBgWebp from '../../../../assets/img/whyBg.webp';
import { PlayBtn } from '../../../UI/Icons/PlayBtn';
import SpinnerPreloader from '../../../UI/Preloader/SpinnerPreloader';
import StrapiAPI from '../../../../API/StrapiAPI';
import { server } from '../../../../data/data';
import useScrollBlock from '../../../../hooks/useScrollBlock';

const DashbordComponent = () => {
  const [dashboardImage, setdashboardImage] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

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

  // const opts = {
  //   height: '100%',
  //   width: '100%'
  // };

  // const onPlayerReady = (event) => {
  //   event.target.pauseVideo();
  // }

  useEffect(() => {
    fetchDashbord();
    setisLoading(false);
  }, [setdashboardImage]);

  if (isLoading) {
    return <SpinnerPreloader />
  }

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
            <span className={styles.howItWorksheading}>
              how BI works
            </span>
            <span className={styles.howItWorksSmallHeading}>
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
          {/* <YouTube
            className={styles.iframe}
            videoId="2g811Eo7K8U"
            opts={opts}
            onReady={onPlayerReady}
          /> */}
        </div>
      </div>
    </section>
  )
}

export const Dashbord = hot(DashbordComponent);