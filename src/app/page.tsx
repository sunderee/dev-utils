'use client';

import { useDestinationContext } from "@/components/destination-provider";
import { AppDestination } from "@/hooks/use-destination";
import { JSX } from "react";
import JsonMinify from "./json/json-minify";
import JsonPrettify from "./json/json-prettify";
import JsonValidate from "./json/json-validate";
import XmlMinify from "./xml/xml-minify";
import XmlPrettify from "./xml/xml-prettify";
import XMLToJSON from "./xml/xml-to-json";

export default function Home() {
  const { destination } = useDestinationContext();
  const destinationToPageMap: Record<AppDestination, JSX.Element> = {
    // JSON
    'json-minify': <JsonMinify />,
    'json-prettify': <JsonPrettify />,
    'json-validate': <JsonValidate />,

    // XML
    'xml-minify': <XmlMinify />,
    'xml-prettify': <XmlPrettify />,
    'xml-to-json': <XMLToJSON />
  }

  return destinationToPageMap[destination]
}
