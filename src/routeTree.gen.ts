/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ServicesImport } from './routes/services'
import { Route as ProjectsImport } from './routes/projects'
import { Route as ContactImport } from './routes/contact'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ServicesRoute = ServicesImport.update({
  id: '/services',
  path: '/services',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsRoute = ProjectsImport.update({
  id: '/projects',
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      id: '/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsImport
      parentRoute: typeof rootRoute
    }
    '/services': {
      id: '/services'
      path: '/services'
      fullPath: '/services'
      preLoaderRoute: typeof ServicesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/projects': typeof ProjectsRoute
  '/services': typeof ServicesRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/projects': typeof ProjectsRoute
  '/services': typeof ServicesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/projects': typeof ProjectsRoute
  '/services': typeof ServicesRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/contact' | '/projects' | '/services'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/contact' | '/projects' | '/services'
  id: '__root__' | '/' | '/about' | '/contact' | '/projects' | '/services'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ContactRoute: typeof ContactRoute
  ProjectsRoute: typeof ProjectsRoute
  ServicesRoute: typeof ServicesRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ContactRoute: ContactRoute,
  ProjectsRoute: ProjectsRoute,
  ServicesRoute: ServicesRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/about",
        "/contact",
        "/projects",
        "/services"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/about": {
      "filePath": "about.jsx"
    },
    "/contact": {
      "filePath": "contact.jsx"
    },
    "/projects": {
      "filePath": "projects.jsx"
    },
    "/services": {
      "filePath": "services.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
