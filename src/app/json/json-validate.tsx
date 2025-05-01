'use client'

import { Textarea } from "@/components/ui/textarea";
import { useJSONValidate } from "@/hooks/json/use-json-validate";
import { useState } from "react";

export default function JsonValidate() {
    const [input, setInput] = useState<string>('');
    const isValid = useJSONValidate(input);

    return (
        <div className="w-full mx-auto flex flex-col gap-6">
            <h1 className="text-3xl font-bold">JSON Validate</h1>

            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="json-input" className="text-sm font-medium">Input JSON</label>
                <Textarea
                    id="json-input"
                    placeholder="Paste your JSON here..."
                    value={input}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setInput(event.target.value)}
                />
            </div>

            <p className={`text-sm font-medium ${isValid ? 'text-green-500' : 'text-red-500'}`}>
                {isValid ? 'Valid JSON' : 'Invalid JSON'}
            </p>
        </div>
    );
}