import { createFileRoute } from "@tanstack/react-router";
import Service from "../components/Service";

export const Route = createFileRoute("/services")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Service />;
}
