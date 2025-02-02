import { createRootRoute,  Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Footer from '../components/footer/footer'

export const Route = createRootRoute({
  component: () => (
    <>
    
          <Outlet />
      <TanStackRouterDevtools />
      <Footer/>
    </>
  ),
})