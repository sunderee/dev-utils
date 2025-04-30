'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useJSONMinify } from "@/hooks/json/use-json-minify";
import { useState } from "react";
import { toast } from "sonner";

export default function JsonMinify() {
    const [input, setInput] = useState<string>('');
    const output = useJSONMinify(input);


    return <div className="w-full max-w-full overflow-hidden">
        <h1>JSON Minify</h1>

        <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
        />

        <Input
            className="pre"
            value={output}
            readOnly
        />

        <Button onClick={() => {
            if (output.length !== 0) {
                navigator.clipboard.writeText(output);
                toast('Copied to clipboard.')
            }
        }}>Copy to clipboard</Button>
    </div>
}

function Output({ value }: { value: string }) {
    return <div>
        <h2>Output</h2>
        <pre>{value}</pre>
    </div>
}