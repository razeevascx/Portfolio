import { createFileRoute } from "@tanstack/react-router";
import About from "../pages/About/About";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <About />;
}
