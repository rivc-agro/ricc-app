import React from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import useSSR from 'use-ssr';

const LazyLoadComponentWrapper = ({children, ...props }) => {
    const { isServer } = useSSR();

    return (
        <LazyLoadComponent
            {...props}
            visibleByDefault={isServer}
        >
            {children}
        </LazyLoadComponent>
    )
}

export default LazyLoadComponentWrapper; 