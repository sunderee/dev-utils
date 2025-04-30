import { useEffect, useState } from "react";

export function useJSONMinify(input: string): string {
    const [output, setOutput] = useState<string>('');

    useEffect(() => {
        try {
            const minified = JSON.stringify(JSON.parse(input));
            setOutput(minified);
        } catch (error) {
            if (process.env.NODE_ENV !== 'production') {
                console.error(error);
            }
            setOutput('');
        }
    }, [input]);

    return output
}