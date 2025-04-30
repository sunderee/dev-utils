'use client';

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useJSONPrettify } from "@/hooks/json/use-json-prettify";
import React, { useState } from "react";
import { toast } from "sonner";

export default function JsonPrettify() {
    const [input, setInput] = useState<string>('');
    const [tabWidth, setTabWidth] = useState<number>(2);
    const output = useJSONPrettify(input, tabWidth);

    return <div className="w-full mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-bold">JSON Prettify</h1>

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
            <label htmlFor="tab-width" className="text-sm font-medium">Tab Width</label>
            <Select value={tabWidth.toString()} onValueChange={(value) => setTabWidth(parseInt(value))}>
                <SelectTrigger>
                    <SelectValue placeholder="Select a tab width" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="json-output" className="text-sm font-medium">Prettified JSON</label>
            <Textarea
                id="json-output"
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