import React from 'react'

const ShevronLeft = ({ ...props }) => {
    return (
        <svg {...props} viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1 9L9 17" stroke="white" />
        </svg>
    )
}

export default ShevronLeft