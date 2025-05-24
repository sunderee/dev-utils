import { useState } from "react";

type JSONDestination = 'json-minify' | 'json-prettify' | 'json-validate';
type XMLDestination = 'xml-minify' | 'xml-prettify';
type GraphQLDestination = 'graphql-minify';
type FileConverters = 'xml-to-json';
export type AppDestination = JSONDestination | XMLDestination | GraphQLDestination | FileConverters;

export function useDestination() {
    const [destination, setDestination] = useState<AppDestination>('json-minify');

    return { destination, setDestination };
}