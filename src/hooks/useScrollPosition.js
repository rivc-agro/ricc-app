import React, { useEffect, useState, useLayoutEffect } from 'react'

const useScrollPosition = () => {
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
    const [scrollPosition, setScrollPosition] = useState(false);
    let lastScrollTop = 0;

    useIsomorphicLayoutEffect(() => {
        const updatePosition = () => {
            const scrollPosition = window.pageYOffset;

            if (scrollPosition > lastScrollTop) {
                setScrollPosition(false);
            } else {
                setScrollPosition(true);
            }

            lastScrollTop = scrollPosition;
        };

        window.addEventListener('scroll', updatePosition);

        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
}

export default useScrollPosition