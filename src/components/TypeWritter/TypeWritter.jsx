import { useEffect, useState } from "react";
import './TypeWritter.css';


export const TypeWritter = ({ text, delay, onHandleContinueWord }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setcurrentIndex] = useState(0);
    const [display, setDisplay] = useState('');

    useEffect(() => {
        if (currentIndex < text.length) {
            onHandleContinueWord(false);
            const textInterval = setTimeout(() => {
                setDisplayText((prevTxt) => prevTxt + text[currentIndex]);
                setcurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);
            return () => clearTimeout(textInterval);
        }
        else {
            setDisplay('none');
            onHandleContinueWord(true);
        }
    }, [currentIndex, text, delay])


    return (
        <>
            {displayText}
            <span className={`cursor-blink ${display}`}>_</span>
        </>
    )
}
