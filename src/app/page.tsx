import { Clock } from "@/components/Clock";
import { Reveal } from "@/components/Reveal";
import { TechIcon } from "@/components/TechIcon";
import { Bullets, Chip, Emphasis, Meta, Row, Section } from "@/components/ui";
import {
  about,
  certifications,
  domains,
  education,
  experience,
  profile,
  projects,
  skills,
  type Entry,
} from "@/lib/resume";

function EntryItem({ entry }: { entry: Entry }) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div>
        <h3 className="font-sans text-base font-medium text-ink">
          {entry.href ? (
            <a
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ink-dim"
            >
              {entry.title} <span aria-hidden>↗</span>
            </a>
          ) : (
            entry.title
          )}
        </h3>
        <Meta org={entry.org} period={entry.period} />
      </div>
      <Bullets items={entry.bullets} />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between px-4 py-3 font-display text-xs uppercase text-ink-dim">
        <span>◎ {profile.location}</span>
        <Clock timeZone={profile.timeZone} />
      </div>

      <main className="mx-auto w-full max-w-2xl flex-1 border-x border-chip-border">
        <header className="flex flex-col items-center gap-3 px-4 py-8">
          <div className="flex size-14 items-center justify-center rounded border border-chip-border font-display text-base font-medium">
            {profile.initials}
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-sans text-[1.75rem] font-medium leading-tight">
              {profile.name}
            </h1>
            <p className="font-sans text-base font-normal text-ink-dim">
              {profile.title}
            </p>
          </div>
        </header>

        <Section label="About">
          <p className="font-sans text-base font-normal leading-relaxed">
            {about.map((part, i) =>
              part.mark ? (
                <Emphasis key={i}>{part.text}</Emphasis>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </p>
        </Section>

        <Section label="Experience">
          <div className="flex flex-col gap-8">
            {experience.map((entry, i) => (
              <Reveal key={entry.title} delay={i * 60}>
                <EntryItem entry={entry} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section label="Projects">
          <div className="flex flex-col gap-8">
            {projects.map((entry, i) => (
              <Reveal key={entry.title} delay={i * 60}>
                <EntryItem entry={entry} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section label="Education">
          {education.map((entry) => (
            <Reveal key={entry.title}>
              <h3 className="font-sans text-base font-medium text-ink">
                {entry.title}
              </h3>
              <Meta org={entry.org} period={entry.period} />
            </Reveal>
          ))}
        </Section>

        <Section label="Certifications">
          <div className="flex flex-col gap-6">
            {certifications.map((entry) => (
              <Reveal key={entry.title}>
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4"
                >
                  <span>
                    <span className="block font-sans text-base font-medium text-ink">
                      {entry.title}
                    </span>
                    <Meta org={entry.org} period={entry.period} />
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-ink-ghost transition-colors group-hover:text-ink"
                  >
                    →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section label="Skills / Domain">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {skills.map((slug) => (
                <TechIcon key={slug} slug={slug} />
              ))}
            </div>
            <div className="mt-6 border-t border-chip-border pt-6">
              <div className="flex flex-wrap gap-3">
                {domains.map((domain) => (
                  <Chip key={domain}>{domain}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        </Section>

        <Section label="Contact">
          <div className="flex flex-col gap-6">
            <Row
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <Row
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
            />
            <Row
              label="LinkedIn"
              value={profile.linkedin.label}
              href={profile.linkedin.href}
            />
            <Row
              label="GitHub"
              value={profile.github.label}
              href={profile.github.href}
            />
            <Row label="Location" value={profile.location} />
          </div>
        </Section>

        <footer className="flex flex-col items-center gap-3 border-t border-chip-border py-10 font-sans text-base text-ink-dim">
          <p>Built with Next.js ▲</p>
          <p>© {new Date().getFullYear()} {profile.name}</p>
        </footer>
      </main>
    </div>
  );
}
