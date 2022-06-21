import { hot } from 'react-hot-loader/root';
import React from 'react'

const PlayBtnComponent = ({...props}) => {
    return (
        <svg {...props}  viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.0639 14.0339C27.4 14.7989 27.407 16.7234 26.0765 17.498L3.15044 30.8456C1.81992 31.6203 0.149763 30.6641 0.144171 29.1245L0.047819 2.59615C0.0422271 1.05656 1.70539 0.0882595 3.04151 0.853212L26.0639 14.0339Z" fill="currentColor" />
        </svg>
    )
}

export const PlayBtn = hot(PlayBtnComponent);