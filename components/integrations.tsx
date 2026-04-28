import { cn } from "@/lib/utils";
import { DecorIcon } from "@/components/ui/decor-icon";
import { data } from "@/lib/skills-data";
import type { Integration } from "@/lib/skills-data";

export function Integrations() {
  return (
    <div className="relative mx-auto max-w-5xl border">
      <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-3">
        {data.map((item) => (
          <IntegrationCard integration={item} key={item.name}>
            {item.icon}
          </IntegrationCard>
        ))}
      </div>
      <DecorIcon position="top-left" />
      <DecorIcon position="top-right" />
      <DecorIcon position="bottom-left" />
      <DecorIcon position="bottom-right" />
    </div>
  );
}

function IntegrationCard({
  integration,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  integration: Integration;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-start gap-4 bg-background p-4 text-start md:p-6 md:even:bg-background/75",
        className,
      )}
      {...props}
    >
      {children}

      <div className="space-y-1">
        <h3 className="font-semibold">{integration.name}</h3>
        <p className="text-muted-foreground text-xs md:text-sm">
          {integration.description}
        </p>
      </div>
    </div>
  );
}
