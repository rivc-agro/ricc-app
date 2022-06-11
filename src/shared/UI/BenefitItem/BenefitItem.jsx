import { hot } from 'react-hot-loader/root';
import React from 'react';

const BenefitItemComponent = (props) => {
    return (
        <li className={props.class}>
            <img
                className={props.classImg}
                src={props.srcImg}
                alt={props.altImg} 
            />
            <span className={props.classCaption} >
                {props.caption}
            </span>
        </li>
    );
};

export const BenefitItem = hot(BenefitItemComponent);