"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(
  undefined
);

export function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an Accordion");
  }
  return context;
}

export interface AccordionProps {
  children: React.ReactNode;
  defaultOpenId?: string | string[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  children,
  defaultOpenId,
  allowMultiple = true,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(() => {
    if (!defaultOpenId) return new Set();
    if (Array.isArray(defaultOpenId)) return new Set(defaultOpenId);
    return new Set([defaultOpenId]);
  });

  const toggleItem = React.useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          if (!allowMultiple) {
            next.clear();
          }
          next.add(id);
        }
        return next;
      });
    },
    [allowMultiple]
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn("space-y-3", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function AccordionItem({ id, className, children }: AccordionItemProps) {
  const { openItems } = useAccordion();
  const isOpen = openItems.has(id);

  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "transition-all duration-200 rounded-xl",
        isOpen
          ? "bg-muted/40 dark:bg-muted/20 border border-border/80 dark:border-border/60 p-4 sm:p-5 skill-inner-shadow"
          : "border border-transparent hover:bg-muted/20 p-3.5 sm:p-4",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<{ id?: string; isOpen?: boolean }>,
            { id, isOpen }
          );
        }
        return child;
      })}
    </div>
  );
}

export interface AccordionTriggerProps {
  id?: string;
  isOpen?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function AccordionTrigger({
  id,
  isOpen,
  className,
  children,
}: AccordionTriggerProps) {
  const { toggleItem } = useAccordion();

  const handleToggle = () => {
    if (id) {
      toggleItem(id);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
      className={cn(
        "flex items-center justify-between gap-3 text-left cursor-pointer select-none group w-full",
        className
      )}
    >
      <div className="min-w-0 flex-1">{children}</div>
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:text-foreground",
          isOpen && "rotate-180 text-foreground"
        )}
        aria-hidden="true"
      />
    </div>
  );
}

export interface AccordionContentProps {
  isOpen?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function AccordionContent({
  isOpen,
  className,
  children,
}: AccordionContentProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="accordion-content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className={cn("pt-3 sm:pt-3.5", className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
