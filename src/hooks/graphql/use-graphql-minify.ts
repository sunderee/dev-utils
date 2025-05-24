import { useEffect, useState } from "react";

export function useGraphQLMinify(input: string): string {
    const [output, setOutput] = useState<string>('');

    useEffect(() => {
        let result = input
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
    });

    return output;
}