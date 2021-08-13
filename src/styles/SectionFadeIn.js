import React, { useEffect, useRef, useState } from 'react';

const SectionFadeIn = (children, delay) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                console.log(`entry`, entry, `is = ${entry.isIntersecting}`);//for debugging remove later
                setVisible(entry.isIntersecting);
            });
        });

        const { current } = domRef;
        observer.observe(current);

        //the return to prevent mem leaks
        return () => observer.unobserve(current);
    }, []);

    return (
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} style={{ transitionDelay: delay }} ref={domRef} >

            {/* if there is a problem  check here */} {children}

        </div>
    )
}

export default SectionFadeIn;