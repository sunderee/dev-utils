import { AppSidebar } from "@/components/app-sidebar";
import { DestinationProvider } from "@/components/destination-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { RootLayoutProps } from "@/types/ui";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Utils",
  description: "A collection of tools and utilities for developers.",
  authors: [{ name: 'Peter Aleksander Bizjak', url: 'https://peter-aleksander.bizjak.dev' }]
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <DestinationProvider>
              <AppSidebar />
              <main className="w-full max-w-full p-6 min-h-screen">
                <SidebarTrigger />
                {children}
              </main>
            </DestinationProvider>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
