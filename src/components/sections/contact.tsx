"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { sendContactMessage } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { FadeInStagger, FadeInStaggerItem } from "@/components/ui/fade-in";

const PixelatedCanvas = dynamic(
  () =>
    import("@/components/ui/pixalated-canvas").then(
      (mod) => mod.PixelatedCanvas
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[380px] rounded-xl bg-neutral-100 dark:bg-neutral-900/60 animate-pulse flex items-center justify-center text-xs text-muted-foreground/60">
        Loading canvas...
      </div>
    ),
  }
);

export default function Contact() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPending) return;

    setIsPending(true);
    const formData = new FormData(e.currentTarget);

    try {
      const result = await sendContactMessage(null, formData);

      if (result.success) {
        toast.success(result.message || "Message sent! I'll get back to you soon.");
        formRef.current?.reset();
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="contact" className="w-full py-8 sm:py-10">
      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start">
        {/* Left Side: Interactive Pixelated Canvas */}
        <FadeInStaggerItem yOffset={12} className="flex flex-col items-center md:items-start justify-center w-full">
          <div className="w-full max-w-[340px] md:max-w-none rounded-xl overflow-hidden border border-border/70 bg-neutral-50 dark:bg-neutral-900/60 shadow-xs flex items-center justify-center">
            <PixelatedCanvas
              src="/hardik.png"
              width={340}
              height={400}
              cellSize={3}
              dotScale={0.9}
              shape="square"
              backgroundColor={isDark ? "#171717" : "#fafafa"}
              tintColor={isDark ? "#ffffff" : "#000000"}
              tintStrength={isDark ? 0.08 : 0.04}
              dropoutStrength={0.3}
              interactive={true}
              responsive={true}
              objectFit="cover"
              distortionMode="swirl"
              distortionStrength={3}
              distortionRadius={75}
              className="w-full h-auto block"
            />
          </div>
        </FadeInStaggerItem>

        {/* Right Side: Half-width Contact Form */}
        <FadeInStaggerItem yOffset={12} className="flex flex-col w-full">
          <div className="space-y-1.5 mb-5">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Send a quick message
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Have an idea, an opportunity, or just want to say hi? Drop a note below
              and I&apos;ll get back to you.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={isPending}
                placeholder="Hardik Gujrathi"
                className="w-full px-3.5 py-2.5 rounded-lg border border-border/70 bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-hidden focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40 transition-all disabled:opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isPending}
                placeholder="gujarathihardik29@gmail.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-border/70 bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-hidden focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40 transition-all disabled:opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                disabled={isPending}
                placeholder="Hey Hardik, let's connect..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-border/70 bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-hidden focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40 transition-all resize-none disabled:opacity-50"
              />
            </div>

            <Button
              type="submit"
              variant="default"
              disabled={isPending}
              className="w-full justify-center"
              leftIcon={
                isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-3.5 w-3.5" />
                )
              }
            >
              {isPending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </FadeInStaggerItem>
      </FadeInStagger>
    </section>
  );
}
