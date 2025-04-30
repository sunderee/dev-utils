'use client';

import { AppDestination, useDestination } from "@/hooks/use-destination";
import { JSX } from "react";
import JsonMinify from "./json-minify/page";

export default function Home() {
  const { destination } = useDestination();
  const destinationToPageMap: Record<AppDestination, JSX.Element> = {
    'json-minify': <JsonMinify />
  }

  return <div className="w-full">
    {destinationToPageMap[destination]}
  </div>
}
