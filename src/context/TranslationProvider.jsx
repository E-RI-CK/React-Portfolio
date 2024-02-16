import { useEffect, useState } from 'react';
import { TranslationContext } from './TranslationContext';

export const TranslationProvider = ({ children }) => {

    const [language, setLanguage] = useState('es');
    const [translation, setTranslation] = useState({});

    const changeLanguage = (event) => {
        setLanguage(event.target.parentElement.dataset.language);
    }

    useEffect(() => {
        const getTranslations = async () => {
            try {
                const res = await fetch(`/json/languages/${language}.json`);
                const data = await res.json();
                setTranslation(data);
            } catch (error) {
                throw new Error(`Error: ${error}`);
            }

        }
        getTranslations();

    }, [language])

    return (
        <TranslationContext.Provider value={{ language, translation, changeLanguage }}>
            {children}
        </TranslationContext.Provider>
    )
}
