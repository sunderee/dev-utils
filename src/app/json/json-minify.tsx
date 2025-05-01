'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useJSONMinify } from "@/hooks/json/use-json-minify";
import React, { useState } from "react";
import { toast } from "sonner";

export default function JsonMinify() {
    const [input, setInput] = useState<string>('');
    const output = useJSONMinify(input);

    return <div className="w-full mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-bold">JSON Minify</h1>

        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="json-input" className="text-sm font-medium">Input JSON</label>
            <Textarea
                id="json-input"
                placeholder="Paste your JSON here..."
                value={input}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setInput(event.target.value)}
            />
        </div>

        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="json-output" className="text-sm font-medium">Minified JSON</label>
            <Input
                id="json-output"
                className="w-full font-mono text-sm py-2"
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