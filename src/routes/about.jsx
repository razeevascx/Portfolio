import { createFileRoute } from '@tanstack/react-router'
import About from '../components/About/About'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <About />
}
