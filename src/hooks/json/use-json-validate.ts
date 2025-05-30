import { useEffect, useState } from "react";

export function useJSONValidate(input: string): boolean {
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        try {
            JSON.parse(input);
            setIsValid(true);
        } catch (error) {
            if (process.env.NODE_ENV !== 'production') {
                console.error(error);
            }
            setIsValid(false);
        }
    }, [input]);

    return isValid;
}