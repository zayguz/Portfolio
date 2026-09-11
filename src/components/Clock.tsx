"use client";

import { useEffect, useRef } from "react";

export function Clock({ timeZone }: { timeZone: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });

    const tick = () => {
      if (ref.current) ref.current.textContent = formatter.format(new Date());
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span ref={ref} suppressHydrationWarning className="tabular-nums">
      --:--:--
    </span>
  );
}
