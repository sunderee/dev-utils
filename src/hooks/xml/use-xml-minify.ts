import { useEffect, useState } from "react";
import xmlFormat from 'xml-formatter';

export function useXMLMinify(input: string) {
    const [output, setOutput] = useState<string>('');

    useEffect(() => {
        try {
            const result = xmlFormat.minify(input, { throwOnFailure: true });
            setOutput(result);
        } catch (error) {
            if (process.env.NODE_ENV !== 'production') {
                console.error(error);
            }
            setOutput('');
        }
    }, [input]);

    return output;
}