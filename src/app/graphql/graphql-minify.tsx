'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useGraphQLMinify } from "@/hooks/graphql/use-graphql-minify";
import React, { useState } from "react";
import { toast } from "sonner";

export default function GraphQLMinify() {
    const [input, setInput] = useState<string>('');
    const output = useGraphQLMinify(input);

    return <div className="w-full mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-bold">GraphQL Minify</h1>

        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="graphql-input" className="text-sm font-medium">Input GraphQL</label>
            <Textarea
                id="graphql-input"
                placeholder="Paste your GraphQL here..."
                value={input}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setInput(event.target.value)}
            />
        </div>

        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="graphql-output" className="text-sm font-medium">Minified GraphQL</label>
            <Input
                id="graphql-output"
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