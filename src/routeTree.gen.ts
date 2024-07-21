/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/~__root'
import { Route as IndexImport } from './routes/~index'
import { Route as AboutIndexImport } from './routes/~about/~index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AboutIndexRoute = AboutIndexImport.update({
  path: '/about/',
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
    '/about/': {
      id: '/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({ IndexRoute, AboutIndexRoute })

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "~__root.tsx",
      "children": [
        "/",
        "/about/"
      ]
    },
    "/": {
      "filePath": "~index.tsx"
    },
    "/about/": {
      "filePath": "~about/~index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
