import React from 'react'
import styles from './Social.scss';
import WhatsUp from '../../UI/Icons/WhatsUp';
import LinkendIn from '../../UI/Icons/LinkendIn';

const Social = ({...props}) => {
    return (
        <ul className={[styles.socialList, props.class].join(' ')}>
            <li className={styles.socialItem}>
                <a href="/" className={styles.socialLink} target="_blank">
                    <WhatsUp
                        width='32'
                        height='32'
                        className={styles.socialLinkIcon} />
                </a>
            </li>
            <li className={styles.socialItem}>
                <a href="/" className={styles.socialLink} target="_blank">
                    <LinkendIn
                        width='32'
                        height='32'
                        className={styles.socialLinkIcon} />
                </a>
            </li>
        </ul>
    )
}

export default Social