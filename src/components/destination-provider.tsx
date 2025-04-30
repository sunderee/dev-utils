'use client';

import { AppDestination } from "@/hooks/use-destination";
import { createContext, ReactNode, useContext, useState } from "react";

type DestinationContextType = {
    destination: AppDestination;
    setDestination: (destination: AppDestination) => void;
};

const DestinationContext = createContext<DestinationContextType | undefined>(undefined);

export function DestinationProvider({ children }: { children: ReactNode }) {
    const [destination, setDestination] = useState<AppDestination>('json-minify');

    return (
        <DestinationContext.Provider value={{ destination, setDestination }}>
            {children}
        </DestinationContext.Provider>
    );
}

export function useDestinationContext() {
    const context = useContext(DestinationContext);
    if (context === undefined) {
        throw new Error("useDestinationContext must be used within a DestinationProvider");
    }
    return context;
} 