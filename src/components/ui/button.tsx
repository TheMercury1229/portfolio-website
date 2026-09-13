"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "default" | "secondary" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "default" | "lg" | "icon";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  onClick?:
    | React.MouseEventHandler<HTMLButtonElement>
    | React.MouseEventHandler<HTMLAnchorElement>;
}

const variantStyles: Record<ButtonVariant, string> = {
  // Black & White themed variants
  default:
    "bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 border border-transparent shadow-xs active:scale-[0.98]",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200/90 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700/80 border border-neutral-200/80 dark:border-neutral-700/60 shadow-xs active:scale-[0.98]",
  outline:
    "bg-transparent text-neutral-900 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 active:scale-[0.98]",
  ghost:
    "bg-transparent text-neutral-900 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800/80 active:scale-[0.98]",
  link:
    "bg-transparent text-neutral-900 dark:text-neutral-100 underline-offset-4 hover:underline p-0 h-auto font-normal active:scale-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs gap-1.5 rounded-md",
  default: "h-9 px-4 py-2 text-sm gap-2 rounded-lg",
  lg: "h-11 px-5 text-base gap-2.5 rounded-lg",
  icon: "h-9 w-9 p-0 rounded-lg justify-center",
};

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500 disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className
  );
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      leftIcon,
      rightIcon,
      href,
      target,
      rel,
      download,
      children,
      disabled,
      type = "button",
      onClick,
      ...props
    },
    ref
  ) => {
    const combinedClassName = buttonVariants({ variant, size, className });

    const content = (
      <>
        {leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
        {children && <span>{children}</span>}
        {rightIcon && <span className="inline-flex shrink-0 items-center">{rightIcon}</span>}
      </>
    );

    // If an href is provided, render as Next.js Link or anchor
    if (href) {
      const isExternal = href.startsWith("http") || target === "_blank";
      const isAnchor = href.startsWith("#");
      const anchorRel = isExternal ? rel || "noopener noreferrer" : rel;

      if (isExternal || isAnchor) {
        const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
          if (onClick) {
            (onClick as React.MouseEventHandler<HTMLAnchorElement>)(e);
          }
          if (isAnchor && !e.defaultPrevented) {
            e.preventDefault();
            const targetId = href.slice(1);
            const targetEl = document.getElementById(targetId) || document.querySelector(href);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, "", href);
            }
          }
        };

        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target={target}
            rel={anchorRel}
            download={download}
            className={combinedClassName}
            aria-disabled={disabled}
            onClick={handleClick}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          download={download}
          className={combinedClassName}
          aria-disabled={disabled}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        className={combinedClassName}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
