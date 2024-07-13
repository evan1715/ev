import { useRef, useEffect } from 'react';
import fruit from '../fruit';

/** @param {string} componentName */
const useRenderCheck = (componentName = 'Component') => {
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        fruit.bgBanana(componentName + ' render', renderCount.current);
    }); //no dependency array so it runs on every render

    return renderCount.current;
};

module.exports = useRenderCheck;
