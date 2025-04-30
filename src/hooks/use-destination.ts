import { useState } from "react";

export type AppDestination = 'json-minify';

export function useDestination() {
    const [destination, setDestination] = useState<AppDestination>('json-minify');

    return { destination, setDestination };
}