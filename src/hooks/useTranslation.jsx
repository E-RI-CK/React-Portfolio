import { useContext, useEffect, useMemo, useState } from "react";
import { TranslationContext } from "../context/TranslationContext";

export const useTranslation = () => {

    const { translation, language } = useContext(TranslationContext);
    const [loading, setLoading] = useState(true);
    // Check if the translation has been loaded
    useEffect(() => {
        if (Object.keys(translation).length > 0) {
            setLoading(false); // Change the state to false when the json has loaded
        }
    }, [translation]);

    const key = useMemo(() => language, [language]);
    if (loading) {
        return <div>Cargando...</div>;
    }
    return {
        translation,
        key
    }
}
