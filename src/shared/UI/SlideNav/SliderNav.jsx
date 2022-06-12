import React from 'react'
import ShevronLeft from '../Icons/ShevronLeft'
import ShevronRight from '../Icons/ShevronRight'
import styles from './SlideNav.scss';

const SliderNav = () => {
    return (
        <div className={styles.sliderNav}>
            <button className={styles.btn}>
                <ShevronLeft width="10" height="18" className={styles.btnIcon} />
            </button>
            <button className={[styles.btn, styles.isActive].join(' ')}>
                <ShevronRight width="10" height="18" className={styles.btnIcon}/>
            </button>
        </div>
    )
}

export default SliderNav