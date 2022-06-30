import { hot } from 'react-hot-loader/root';
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styles from './WhyUs.scss';
import logo from '../../../../assets/img/ricc-logo-gradient.svg'
import { Button } from '../../../UI/Button/Button';
import whyBgLayer from '../../../../assets/img/whyBgLayer.png'
import whyBgLayerWebp from '../../../../assets/img/whyBgLayer.webp'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyUsComponent = () => {
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
  const RICCEl = useRef();
  const Logo = useRef();
  const Container = useRef();

  useIsomorphicLayoutEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: Container.current,
        start: "top 50%"
      },
    });

    gsap.set(RICCEl.current, {
      x: '-12.5rem'
    });

    gsap.set(Logo.current, {
      opacity: 0
    });

    timeline
      .to(RICCEl.current, {
        x: 0,
        ease: 'power3.out',
        duration: 0.9,
        clearProps: 'all'
      })
      .to(Logo.current, {
        opacity: 1,
        ease: 'power3.out',
        duration: 0.9,
        clearProps: 'all'
      }, '-=0.8')
  }, []);

  return (
    <section className={styles.section} id='RICC'>
      <picture>
        <source srcSet={whyBgLayerWebp} type='image/webp' />
        <img className={styles.sectionBgImg} src={whyBgLayer} alt="" />
      </picture>
      <h2 className='visually-hidden'>Why RICC</h2>
      <div ref={Container} className={styles.headingContainer}>
        <div
          className={styles.headingWhy}
        ></div>
        <img
          ref={Logo}
          src={logo}
          alt='RICC Logo'
          className={styles.headingLogo} />
        <div
          className={styles.headingRicc}
          ref={RICCEl}
        ></div>
      </div>
      <div className={styles.container}>
        <div className={styles.containerBlock}></div>
        <div className={styles.containerBlock}>
          <ul className={styles.list}>
            <li className={styles.item}>
              50 years of working with data in agriculture
            </li>
            <li className={styles.item}>
              Create business analysis for different goals
            </li>
            <li className={styles.item}>
              More than 3 500 agro producers use our IT-solutions and are accompanied by us
            </li>
          </ul>
          <div className={styles.btns}>
            <Button>
              contACT us
            </Button>
            <Button modBgImg>
              Know more about our solution
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export const WhyUs = hot(WhyUsComponent);