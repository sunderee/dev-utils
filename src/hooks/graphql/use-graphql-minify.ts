import { useEffect, useState } from "react";

export function useGraphQLMinify(input: string): string {
    const [output, setOutput] = useState<string>('');

    useEffect(() => {
        const result = input
            .replaceAll('\n', '')
            .replaceAll(/\s\s+/g, ' ')
            .replaceAll(/\{\s/g, '{')
            .replaceAll(/\s\{/g, '{')
            .replaceAll(/\(\s/g, '(')
            .replaceAll(/\s\}/g, '}')
            .replaceAll(/\s\}/g, '}')
            .replaceAll(/\}\s/g, '}')
            .replaceAll(/\}\s\}/g, '}}')
            .replaceAll(/\,\s/g, ',')
        setOutput(result);
    }, [input]);

    return output;
}