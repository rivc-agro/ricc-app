import { useState, useRef, useEffect } from "react"

const useImageLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const ref = useRef()

    const onLoad = () => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }

    useEffect(() => {
        if (ref.current && ref.current.complete) {
            onLoad();
        }
    })

    return [ref, loaded, onLoad, setLoaded, opacity, setOpacity]
}

export default useImageLoaded;