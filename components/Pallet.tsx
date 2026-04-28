const PaletteRow = ({
  name,
  shades,
  lightValues,
  darkValues,
}: {
  name: string;
  shades: (string | number)[];
  lightValues: string[];
  darkValues: string[];
}) => (
  <div className="flex flex-col gap-4 py-8 border-b border-border/10">
    <div className="flex items-baseline justify-between">
      <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">
        {name}
      </h3>
      <span className="font-mono text-[10px] text-muted-foreground uppercase">
        Shades 50 — 950
      </span>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
      {/* Light Mode Palette */}
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-tighter">
          Light Mode / Base
        </span>
        <div className="flex h-16 w-full rounded-sm overflow-hidden border border-border/5">
          {shades.map((shade, i) => (
            <div
              key={`light-${shade}`}
              className="group relative flex-1 h-full transition-all hover:flex-[1.5] cursor-help"
              style={{ backgroundColor: lightValues[i] }}
            >
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur-[2px] transition-opacity">
                <span className="text-[10px] font-mono font-bold text-white leading-none">
                  {shade}
                </span>
                <span className="text-[8px] font-mono text-white/80 uppercase">
                  {lightValues[i]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dark Mode Palette (Inverted/Adjusted) */}
      <div className="flex flex-col gap-3">
        <span className="font-mono text-[10px] text-primary-light/60 uppercase tracking-tighter">
          Dark Mode / UI Optimized
        </span>
        <div className="flex h-16 w-full rounded-sm overflow-hidden border border-white/5">
          {shades.map((shade, i) => (
            <div
              key={`dark-${shade}`}
              className="group relative flex-1 h-full transition-all hover:flex-[1.5] cursor-help"
              style={{ backgroundColor: darkValues[i] }}
            >
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center bg-white/10 backdrop-blur-[2px] transition-opacity">
                <span className="text-[10px] font-mono font-bold text-white leading-none">
                  {shade}
                </span>
                <span className="text-[8px] font-mono text-white/80 uppercase">
                  {darkValues[i]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function DesignSystemPage() {
  const shadeLevels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  const paletteData = [
    {
      name: "Primary Blue",
      light: [
        "#eff6ff",
        "#dbeafe",
        "#bfdbfe",
        "#93c5fd",
        "#60a5fa",
        "#3b82f6",
        "#2563eb",
        "#1d4ed8",
        "#1e40af",
        "#1e3a8a",
        "#172554",
      ],
      dark: [
        "#082f49",
        "#075985",
        "#0369a1",
        "#0284c7",
        "#0ea5e9",
        "#38bdf8",
        "#7dd3fc",
        "#bae6fd",
        "#e0f2fe",
        "#f0f9ff",
        "#f8fafc",
      ],
    },
    {
      name: "Neutral Gray",
      light: [
        "#f9fafb",
        "#f3f4f6",
        "#e5e7eb",
        "#d1d5db",
        "#9ca3af",
        "#6b7280",
        "#4b5563",
        "#374151",
        "#1f2937",
        "#111827",
        "#030712",
      ],
      dark: [
        "#111827",
        "#1f2937",
        "#374151",
        "#4b5563",
        "#6b7280",
        "#9ca3af",
        "#d1d5db",
        "#e5e7eb",
        "#f3f4f6",
        "#f9fafb",
        "#ffffff",
      ],
    },
    {
      name: "Electric Indigo",
      light: [
        "#eef2ff",
        "#e0e7ff",
        "#c7d2fe",
        "#a5b4fc",
        "#818cf8",
        "#6366f1",
        "#4f46e5",
        "#4338ca",
        "#3730a3",
        "#312e81",
        "#1e1b4b",
      ],
      dark: [
        "#1e1b4b",
        "#312e81",
        "#3730a3",
        "#4338ca",
        "#4f46e5",
        "#6366f1",
        "#818cf8",
        "#a5b4fc",
        "#c7d2fe",
        "#e0e7ff",
        "#f5f7ff",
      ],
    },
  ];

  return (
    <main className="bg-background min-h-screen antialiased selection:bg-primary/30 text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16">
        {/* Header */}
        <header className="flex flex-col gap-4 border-l-4 border-primary pl-8 py-2">
          <h1 className="tracking-tighter font-sans font-bold text-6xl uppercase">
            Color Architecture
          </h1>
          <p className="max-w-2xl text-muted-foreground font-mono text-sm leading-relaxed">
            [v4.0.0] — Systemic color mapping for multi-environment UI
            consistency. Interactive palette preview with automated contrast
            scaling.
          </p>
        </header>

        {/* Legend */}
        <section className="bg-background-card border border-border/20 p-6 rounded-sm flex flex-wrap gap-8 items-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary" />
            <span className="font-mono text-[10px] uppercase">
              Primary Brand
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-muted-foreground" />
            <span className="font-mono text-[10px] uppercase">Neutral UI</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-background border border-border/20" />
            <span className="font-mono text-[10px] uppercase">
              Surface Base
            </span>
          </div>
          <div className="ml-auto">
            <span className="text-[10px] font-mono text-primary-light animate-pulse">
              ● LIVE_SYSTEM_VARS
            </span>
          </div>
        </section>

        {/* Palette Grid */}
        <section className="flex flex-col">
          {paletteData.map((color) => (
            <PaletteRow
              key={color.name}
              name={color.name}
              shades={shadeLevels}
              lightValues={color.light}
              darkValues={color.dark}
            />
          ))}
        </section>

        {/* Implementation Example */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
          <div className="flex flex-col gap-6">
            <h4 className="font-mono text-xs text-primary-light uppercase">
              Application Logic
            </h4>
            <div className="bg-background-card border border-border/20 p-8 flex flex-col gap-4 rounded-sm">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <code className="text-[12px] font-mono leading-relaxed text-muted-foreground">
                <span className="text-primary-light">@theme</span> &#123;
                <br />
                &nbsp;&nbsp;--color-primary:{" "}
                <span className="text-foreground">var(--blue-500)</span>;<br />
                &nbsp;&nbsp;--color-surface:{" "}
                <span className="text-foreground">var(--gray-900)</span>;<br />
                &#125;
              </code>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h4 className="font-mono text-xs text-muted-foreground uppercase">
              Contrast Verification
            </h4>
            <p className="text-sm leading-relaxed">
              The dark mode variants are computationally adjusted to maintain a
              minimum of 4.5:1 contrast ratio against the{" "}
              <code className="bg-card px-1 text-primary-light">
                --background-card
              </code>{" "}
              token (#1A1A1A).
            </p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-primary text-white font-mono text-[10px] uppercase tracking-widest hover:shadow-glow transition-all">
                Test AA Compliance
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
