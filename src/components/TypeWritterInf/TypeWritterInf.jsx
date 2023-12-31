import { useEffect, useState } from "react";
import './TypeWritterInf.css';

export const TypeWritterInf = ({ text, delay, color }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setcurrentIndex] = useState(0);
    const display = '';

    useEffect(() => {
        if ((currentIndex < text.length)) {
            const textInterval = setTimeout(() => {
                setDisplayText((prevTxt) => prevTxt + text[currentIndex]);
                setcurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);
            return () => clearTimeout(textInterval);
        }
    }, [currentIndex, text, delay])


    return (
        <>
            {displayText}
            <span className={`cursor-blink ${display}`} style={{ color: `${color}` }}>_</span>
        </>
    )
}