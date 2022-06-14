import React from 'react'
import ShevronLeft from '../Icons/ShevronLeft'
import ShevronRight from '../Icons/ShevronRight'
import styles from './SlideNav.scss';

const SliderNav = ({classes}) => {
    return (
        <div className={styles.sliderNav}>
            <button className={[styles.btn, classes.prev].join(' ')}>
                <ShevronLeft width="10" height="18" className={styles.btnIcon} />
            </button>
            <button className={[styles.btn, styles.isActive, classes.next].join(' ')}>
                <ShevronRight width="10" height="18" className={styles.btnIcon}/>
            </button>
        </div>
    )
}

export default SliderNav