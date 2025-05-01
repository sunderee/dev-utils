'use client';

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useXMLPrettify } from "@/hooks/xml/use-xml-prettify";
import { useState } from "react";
import { toast } from "sonner";

export default function XmlPrettify() {
    const [input, setInput] = useState<string>('');
    const output = useXMLPrettify(input);

    return <div className="w-full mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-bold">XML Prettify</h1>

        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="xml-input" className="text-sm font-medium">Input XML</label>
            <Textarea
                id="xml-input"
                placeholder="Paste your XML here..."
                value={input}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setInput(event.target.value)}
            />
        </div>

        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="xml-output" className="text-sm font-medium">Prettified XML</label>
            <Textarea
                id="xml-output"
                className="w-full font-mono text-sm min-h-[200px]"
                value={output}
                readOnly
            />
        </div>

        <Button
            className="w-fit px-4"
            onClick={() => {
                if (output.length !== 0) {
                    navigator.clipboard.writeText(output);
                    toast('Copied to clipboard');
                } else {
                    toast('Nothing to copy');
                }
            }}
        >
            Copy to clipboard
        </Button>
    </div>
}