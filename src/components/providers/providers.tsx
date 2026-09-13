
"use client";

import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
        {children}
        <Toaster position="top-center" richColors />
      </ReactLenis>
    </ThemeProvider>
  );
}
