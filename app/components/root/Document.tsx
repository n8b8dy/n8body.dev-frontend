import type { FC } from 'react'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

export const Document: FC = () => {
  return (
    <html lang="en" className="dark selection:text-black selection:bg-neutral-300">
    <head>
      <Meta/>
      <Links/>
      <title>n8body.dev</title>
    </head>
    <body className="bg-material text-white">
    <Outlet/>
    <ScrollRestoration/>
    <Scripts/>
    <LiveReload/>
    </body>
    </html>
  )
}
