import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({ children }) => {
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
    const el = useRef();

    useIsomorphicLayoutEffect(() => {
        gsap.fromTo(el.current.children, {
            opacity: 0,
            y: '2.5rem'
        }, {
            scrollTrigger: {
                trigger: el.current.children
            },
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            duration: 0.9,
            delay: 0.3,
            clearProps: 'all'
        })
    }, []);

    return (
        <div ref={el}>{children}</div>
    )
}

export default FadeIn