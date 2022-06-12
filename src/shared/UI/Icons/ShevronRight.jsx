import React from 'react'

const ShevronRight = ({...props}) => {
    return (
        <svg {...props} viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L9 9L1 17" stroke="white" />
        </svg>
    )
}

export default ShevronRight