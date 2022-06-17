import { hot } from 'react-hot-loader/root';
import React from 'react';
import FadeIn from '../FadeIn/FadeIn';

const BenefitItemComponent = (props) => {
    return (
        <li className={props.class}>
            <FadeIn>
                <div className={props.classInner}>
                    <img
                        className={props.classImg}
                        src={props.srcImg}
                        alt={props.altImg} 
                    />
                    <span className={props.classCaption} >
                        {props.caption}
                    </span>
                </div>
            </FadeIn>
        </li>
    );
};

export const BenefitItem = hot(BenefitItemComponent);