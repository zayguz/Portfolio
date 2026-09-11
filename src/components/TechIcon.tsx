import {
  siC,
  siClaude,
  siCplusplus,
  siCss,
  siDocker,
  siDotnet,
  siExpo,
  siFigma,
  siGit,
  siGithub,
  siGooglegemini,
  siHtml5,
  siJavascript,
  siLinux,
  siMysql,
  siNodedotjs,
  siNumpy,
  siOpenjdk,
  siPandas,
  siPostgresql,
  siPython,
  siReact,
  siSharp,
  siTypescript,
} from "simple-icons";

type Icon = { title: string; hex: string; path: string };

const registry: Record<string, Icon> = {
  c: siC,
  claude: siClaude,
  cplusplus: siCplusplus,
  css: siCss,
  docker: siDocker,
  dotnet: siDotnet,
  expo: siExpo,
  figma: siFigma,
  git: siGit,
  github: siGithub,
  googlegemini: siGooglegemini,
  html5: siHtml5,
  javascript: siJavascript,
  linux: siLinux,
  mysql: siMysql,
  nodedotjs: siNodedotjs,
  numpy: siNumpy,
  openjdk: siOpenjdk,
  pandas: siPandas,
  postgresql: siPostgresql,
  python: siPython,
  react: siReact,
  sharp: siSharp,
  typescript: siTypescript,
};

// Brand colors darker than the page ground would disappear against it.
function isTooDarkForGround(hex: string) {
  const channel = (i: number) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  const luminance =
    0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4);
  return luminance < 0.12;
}

export function TechIcon({ slug }: { slug: string }) {
  const icon = registry[slug];
  if (!icon) return null;

  const fill = isTooDarkForGround(icon.hex) ? "#f2ede8" : `#${icon.hex}`;

  return (
    <div
      title={icon.title}
      className="flex size-10 items-center justify-center rounded border border-chip-border transition-colors hover:border-ink-dim"
    >
      <svg
        role="img"
        aria-label={icon.title}
        viewBox="0 0 24 24"
        className="size-5"
        fill={fill}
      >
        <path d={icon.path} />
      </svg>
    </div>
  );
}
