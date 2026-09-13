import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import Providers from "@/components/providers/providers";



import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Scales } from "@/components/ui/scales";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hardikgujrathi.me"),
  title: {
    default: "Hardik Gujrathi | Full-Stack & AI Engineer",
    template: "%s | Hardik Gujrathi",
  },
  description:
    "Personal portfolio of Hardik Gujrathi – Full-Stack & AI Engineer building intelligent platforms, generative AI applications, and developer tooling.",
  keywords: [
    "Hardik Gujrathi",
    "Full-Stack Engineer",
    "AI Engineer",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Python",
    "LangChain",
    "LangGraph",
    "PICT",
    "Portfolio",
  ],
  authors: [{ name: "Hardik Gujrathi", url: "https://hardikgujrathi.me" }],
  creator: "Hardik Gujrathi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hardikgujrathi.me",
    siteName: "Hardik Gujrathi Portfolio",
    title: "Hardik Gujrathi | Full-Stack & AI Engineer",
    description:
      "Personal portfolio of Hardik Gujrathi – Full-Stack & AI Engineer building intelligent platforms, generative AI applications, and developer tooling.",
    images: [
      {
        url: "/hardik.png",
        width: 800,
        height: 800,
        alt: "Hardik Gujrathi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardik Gujrathi | Full-Stack & AI Engineer",
    description:
      "Personal portfolio of Hardik Gujrathi – Full-Stack & AI Engineer building intelligent platforms, generative AI applications, and developer tooling.",
    images: ["/hardik.png"],
    creator: "@TheMercury1229",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <div className="relative min-h-screen w-full flex justify-center bg-background">
            <div className="relative flex w-full justify-center">
              <div
                aria-hidden="true"
                className="hidden md:block w-3 sm:w-8 shrink-0 relative border-r border-border/40 overflow-hidden select-none"
              >
                <Scales
                  orientation="diagonal"
                  size={8}
                  className="opacity-70 dark:opacity-50"
                />
              </div>

              <div className="w-full max-w-3xl px-4 sm:px-6 min-h-screen flex flex-col relative z-10">
                <Header />
                <main className="flex-1 w-full flex flex-col">{children}</main>
                <Footer />
              </div>

              <div
                aria-hidden="true"
                className="hidden md:block w-3 sm:w-8 shrink-0 relative border-l border-border/40 overflow-hidden select-none"
              >
                <Scales
                  orientation="diagonal"
                  size={8}
                  className="opacity-70 dark:opacity-50"
                />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
