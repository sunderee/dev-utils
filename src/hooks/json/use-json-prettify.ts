import { useEffect, useState } from "react";

export function useJSONPrettify(input: string, tabWidth: number = 2) {
    const [output, setOutput] = useState<string>('');

    useEffect(() => {
        try {
            const parsed = JSON.parse(input);
            const prettified = JSON.stringify(parsed, null, tabWidth);
            setOutput(prettified);
        } catch (error) {
            if (process.env.NODE_ENV !== 'production') {
                console.error(error);
            }
            setOutput('');
        }
    }, [input, tabWidth]);

    return output;
}