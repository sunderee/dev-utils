import { useState } from "react";

export type AppDestination = 'json-minify' | 'json-prettify' | 'json-validate';

export function useDestination() {
    const [destination, setDestination] = useState<AppDestination>('json-minify');

    return { destination, setDestination };
}