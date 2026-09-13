import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import { SocialLinks } from "@/components/shared/social-links";
import { FadeIn } from "@/components/ui/fade-in";

const SITE_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full mt-auto pt-10 pb-8 text-sm text-muted-foreground">
      <FadeIn yOffset={10}>
        <div className="flex flex-col gap-6 sm:gap-7">
        {/* Navigation Links with Title & Horizontal Dot Separator */}
        <div className="flex flex-col gap-2">
          <span className="text-md font-bold uppercase tracking-wider text-foreground">
            Navigation
          </span>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {SITE_LINKS.map((link, index) => (
              <li key={link.name} className="inline-flex items-center font-semibold gap-2">
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline"
                >
                  {link.name}
                </Link>
                {index < SITE_LINKS.length - 1 && (
                  <span
                    className="select-none text-muted-foreground/50 text-xs"
                    aria-hidden="true"
                  >
                    •
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links with Title */}
        <div className="flex flex-col gap-2">
          <span className="text-md font-bold uppercase tracking-wider text-foreground">
            Connect
          </span>
          <SocialLinks className="-ml-2" />
        </div>

        {/* Very Bottom: Made with heart & copyright */}
        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground text-center sm:text-left">
          <p className="inline-flex items-center justify-center sm:justify-start flex-wrap gap-1">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse inline shrink-0" />
            <span>by</span>
            <a
              href="https://github.com/TheMercury1229"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline transition-colors inline-flex items-center gap-0.5 group"
            >
              <span>Hardik aka mercury</span>
              <ArrowUpRight className="h-3 w-3 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </p>
          <p className="text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Hardik Gujrathi. All rights reserved.
          </p>
        </div>
      </div>
      </FadeIn>
    </footer>
  );
}
