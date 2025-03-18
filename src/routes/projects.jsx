import { createFileRoute} from "@tanstack/react-router";
import Project from "../components/Project";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
   
      <Project />
  );
}
