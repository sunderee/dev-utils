import { useEffect, useState } from 'react';
import xmlFormat from 'xml-formatter';

export function useXMLPrettify(input: string) {
    const [output, setOutput] = useState<string>('');

    useEffect(() => {
        try {
            const result = xmlFormat(input, {
                throwOnFailure: true,
                filter: (node) => node.type !== 'Comment',
                collapseContent: true
            });
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