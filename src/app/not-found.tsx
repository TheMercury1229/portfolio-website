import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center text-center py-16 sm:py-24">
      <FadeIn yOffset={10}>
        <div className="flex flex-col items-center max-w-md mx-auto space-y-5">
          {/* 404 badge */}

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Looks like you&apos;re lost
          </h1>

          {/* Explanation */}
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            The page you are looking for doesn&apos;t exist, was moved, or the link
            might have been typed incorrectly.
          </p>

          {/* Navigation CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
            <Button
              href="/"
              variant="default"
              className="w-full sm:w-auto justify-center"
              leftIcon={<ArrowLeft className="h-4 w-4" />}
            >
              Back to Home
            </Button>
            <Button
              href="/projects"
              variant="outline"
              className="w-full sm:w-auto justify-center"
            >
              View Projects
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
