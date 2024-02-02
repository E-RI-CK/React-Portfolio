import { useEffect, useState } from "react";

export const useLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    return { loading };
}
