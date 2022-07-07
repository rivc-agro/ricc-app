import React, { useEffect, useState, useLayoutEffect } from 'react'
import styles from './Social.scss';
import WhatsUp from '../../UI/Icons/WhatsUp';
import LinkendIn from '../../UI/Icons/LinkendIn';
import StrapiAPI from '../../../API/StrapiAPI';

const Social = ({ ...props }) => {
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
    const [socials, setSocials] = useState([]);

    async function fetchSocials() {
        const resp = await StrapiAPI.getSocials();
        const socialsItems = [];
        const socialsItem1 = resp.data[0].attributes.LinkedIn;
        const socialsItem2 = resp.data[0].attributes.WhatsUp;
        socialsItems.push(socialsItem1);
        socialsItems.push(socialsItem2);
        setSocials(socialsItems);
    };

    useIsomorphicLayoutEffect(() => {
        fetchSocials();
    }, []);

    return (
        <ul className={[styles.socialList, props.class].join(' ')}>
            <li className={styles.socialItem}>
                <a href={socials[0]} className={styles.socialLink} target="_blank">
                    <WhatsUp
                        width='32'
                        height='32'
                        className={styles.socialLinkIcon} />
                </a>
            </li>
            <li className={styles.socialItem}>
                <a href={socials[1]} className={styles.socialLink} target="_blank">
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