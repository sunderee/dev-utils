import { useState } from "react";

type JSONDestination = 'json-minify' | 'json-prettify' | 'json-validate';
type XMLDestination = 'xml-minify';
export type AppDestination = JSONDestination | XMLDestination;

export function useDestination() {
    const [destination, setDestination] = useState<AppDestination>('json-minify');

    return { destination, setDestination };
}