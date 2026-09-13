"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GithubActivityProps {
  username?: string;
  className?: string;
}

const LEVEL_COLORS: Record<number, string> = {
  0: "fill-[#ebedf0] dark:fill-[#1e2228]",
  1: "fill-[#9be9a8] dark:fill-[#0e4429]",
  2: "fill-[#40c463] dark:fill-[#006d32]",
  3: "fill-[#30a14e] dark:fill-[#26a641]",
  4: "fill-[#216e39] dark:fill-[#39d353]",
};

export function GithubActivity({
  username = "TheMercury1229",
  className,
}: GithubActivityProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchContributions() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        if (isMounted && data?.contributions) {
          setContributions(data.contributions);
          setTotalCount(data.total?.lastYear ?? null);
        }
      } catch (err) {
        console.error("Failed to load GitHub activity:", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchContributions();
    return () => {
      isMounted = false;
    };
  }, [username]);

  // Scroll to current date (right side) on mobile after load
  useEffect(() => {
    if (!isLoading && scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft =
        scrollContainerRef.current.scrollWidth;
    }
  }, [isLoading]);

  // Chunk contributions into 7-day columns (weeks)
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  // Calculate month labels and their starting column indexes
  const monthLabels: { index: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, index) => {
    if (week.length > 0) {
      const d = new Date(week[0].date + "T00:00:00Z");
      const m = d.getUTCMonth();
      if (m !== lastMonth) {
        const label = d.toLocaleString("en-US", {
          month: "short",
          timeZone: "UTC",
        });
        monthLabels.push({ index, label });
        lastMonth = m;
      }
    }
  });

  const cellPitch = 13; // 10px cell + 3px gap
  const topPadding = 18;
  const rightPadding = 14; // Ensures the last column & "Sep" label are fully visible without empty dead space
  const svgWidth = weeks.length * cellPitch + rightPadding;
  const svgHeight = topPadding + 7 * cellPitch + 2;

  return (
    <div className={cn("w-full", className)}>
      {/* Heading outside the box (green dot removed) */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <h2 className="text-sm sm:text-base font-semibold text-foreground tracking-tight">
          Hardik&apos;s activity
        </h2>
        {totalCount !== null && (
          <span className="text-xs text-muted-foreground font-medium truncate">
            {totalCount.toLocaleString()} contributions in the last year
          </span>
        )}
      </div>

      {/* Heatmap Card Box */}
      <div className="w-full rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xs p-4 sm:p-5 shadow-xs transition-all">
        {/* Heatmap Graph with hidden scrollbar */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto pb-1 pt-0.5 select-none relative [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {isLoading ? (
            /* Loading Skeleton */
            <div className="flex flex-col gap-2 animate-pulse py-1">
              <div className="h-3 w-28 bg-muted rounded" />
              <div className="flex gap-[3px]">
                {Array.from({ length: 53 }).map((_, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }).map((_, rowIdx) => (
                      <div
                        key={rowIdx}
                        className="w-[10px] h-[10px] rounded-[2px] bg-muted/60"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative inline-block">
              <svg
                width={svgWidth}
                height={svgHeight}
                className="overflow-visible block"
              >
                {/* Month Labels */}
                {monthLabels.map((m, idx) => (
                  <text
                    key={idx}
                    x={m.index * cellPitch}
                    y="11"
                    className="text-[10px] fill-muted-foreground font-sans font-medium"
                  >
                    {m.label}
                  </text>
                ))}

                {/* Contribution Cells (no weekday labels, no hover tooltips) */}
                {weeks.map((week, wIdx) => {
                  const x = wIdx * cellPitch;
                  return week.map((day, dIdx) => {
                    const y = topPadding + dIdx * cellPitch;
                    return (
                      <rect
                        key={day.date}
                        x={x}
                        y={y}
                        width="10"
                        height="10"
                        rx="2"
                        ry="2"
                        className={cn(
                          "transition-colors stroke-border/15",
                          LEVEL_COLORS[day.level]
                        )}
                      />
                    );
                  });
                })}
              </svg>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default GithubActivity;
