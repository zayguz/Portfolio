import type { ReactNode } from "react";

export function Section({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-label={label}
      className="flex flex-col gap-8 border-t border-chip-border px-4 py-8"
    >
      <p className="font-display text-sm font-medium uppercase tracking-normal">
        {label}
      </p>
      {children}
    </section>
  );
}

export function Emphasis({ children }: { children: ReactNode }) {
  return (
    <strong className="font-bold underline decoration-ink-dim underline-offset-4">
      {children}
    </strong>
  );
}

export function Meta({ org, period }: { org: string; period: string }) {
  return (
    <p className="flex flex-wrap gap-1 font-display text-xs font-normal leading-normal text-ink-dim">
      {org}
      <span>·</span>
      {period}
    </p>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col text-ink-dim">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="shrink-0">•</span>
          <p className="font-sans text-base font-normal">{item}</p>
        </li>
      ))}
    </ul>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-chip-border px-3 py-1.5 text-base font-normal text-ink-dim">
      {children}
    </span>
  );
}

export function Row({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="font-sans text-base font-normal">{label}</p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-base font-normal text-ink-dim transition-colors hover:text-ink"
        >
          {value}
        </a>
      ) : (
        <p className="font-sans text-base font-normal text-ink-dim">{value}</p>
      )}
    </div>
  );
}
