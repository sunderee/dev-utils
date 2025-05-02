import { useEffect, useState } from "react";
import { convertXML } from "simple-xml-to-json";

export function useXMLToJSON(input: string) {
    const [output, setOutput] = useState<string>('');

    useEffect(() => {
        try {
            const xmlToJSON = convertXML(input);
            if (xmlToJSON === null || xmlToJSON === undefined) {
                setOutput('');
                return;
            }

            setOutput(JSON.stringify(xmlToJSON, null, 2));
        } catch (error) {
            if (process.env.NODE_ENV !== 'production') {
                console.error(error);
            }
            setOutput('');
        }
    }, [input]);

    return output;
}