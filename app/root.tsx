import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'

import { Document } from '~/components/root/Document'
import { EnvironmentContextProvider } from '~/contexts/EnvironmentContextProvider'

import stylesheet from '~/styles/tailwind.css'

import type { EnvironmentMap } from '~/types/environment'

import { API_ENDPOINT, IP_API_ENDPOINT, MEME_API_ENDPOINT } from '~/constants'
import { useLoaderData } from '@remix-run/react'

export type RootProps = {
  environment: EnvironmentMap
}

export const loader: LoaderFunction = async () => {
  return json<RootProps>({
    environment: {
      API_ENDPOINT,
      IP_API_ENDPOINT,
      MEME_API_ENDPOINT,
    },
  })
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'n8body.dev',
  viewport: 'width=device-width,initial-scale=1',
})

const Root = () => {
  const { environment } = useLoaderData<RootProps>()

  return (
    <EnvironmentContextProvider environment={environment}>
      <Document/>
    </EnvironmentContextProvider>
  )
}

export default Root
