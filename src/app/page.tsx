'use client';

import { useDestinationContext } from "@/components/destination-provider";
import { AppDestination } from "@/hooks/use-destination";
import { JSX } from "react";
import JsonMinify from "./json/json-minify";
import JsonPrettify from "./json/json-prettify";
import JsonValidate from "./json/json-validate";

export default function Home() {
  const { destination } = useDestinationContext();
  const destinationToPageMap: Record<AppDestination, JSX.Element> = {
    'json-minify': <JsonMinify />,
    'json-prettify': <JsonPrettify />,
    'json-validate': <JsonValidate />
  }

  return destinationToPageMap[destination]
}
