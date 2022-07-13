import React from 'react'

const Calendar = ({...props}) => {
    return (
        <svg width="56" height="60" viewBox="0 0 56 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49 7.00021H7C3.68629 7.00021 1 9.6865 1 13.0002V55.0002C1 58.3139 3.68629 61.0002 7 61.0002H49C52.3137 61.0002 55 58.3139 55 55.0002V13.0002C55 9.6865 52.3137 7.00021 49 7.00021Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 43L25 49L37 37M40 1V13V1ZM16 1V13V1ZM1 25H55H1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Calendar