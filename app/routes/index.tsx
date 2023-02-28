import { useContext, useEffect, useState } from 'react'
import { MetaFunction } from '@remix-run/node'
import clsx from 'clsx'

import { MainLayout } from '~/components/layout/MainLayout'
import { TypedText } from '~/components/content/TypedText'
import { Paragraph } from '~/components/content/Paragraph'
import { Heading } from '~/components/content/Heading'
import { Link } from '~/components/content/Link'
import { BulletList } from '~/components/content/BulletList'

import { EnvironmentContext } from '~/contexts/EnvironmentContextProvider'

const descriptions = [
  'a front-end developer',
  '*searching a job as a react developer*',
  '*probably coding right now*',
  'a front-end developer',
]

const links = [
  { text: 'Email', href: 'mailto:contact@n8body.dev' },
  { text: 'Discord', href: 'https://discordapp.com/users/520239310591492114' },
  { text: 'Telegram', href: 'https://t.me/n8body' },
]

export const meta: MetaFunction = () => {
  return {
    title: 'n8body.dev',
    description: 'website of a front-end developer',
  }
}

export default function Home() {
  const [ip, setIp] = useState<string>()

  const { getVariable } = useContext(EnvironmentContext)

  useEffect(() => {
    const api_endpoint = getVariable('IP_API_ENDPOINT')
    fetch(`${api_endpoint}/?format=json`)
      .then(response => {
        if (response?.ok) return response.json()
        throw new Error(`Couldn't get the user's IP address. Response status: ${response?.status}`)
      })
      .then(data => setIp(data.ip))
      .catch(error => {
        setIp('username')
        console.error(error)
      })
  }, [])

  return (
    <MainLayout>
      <div className="h-screen flex flex-col gap-3 justify-center items-center">
        <h1 className="font-spaceGrotesk font-semibold text-7xl lg:text-8xl xl:text-8.5xl">n8body</h1>
        <TypedText values={descriptions} component="h2" className={clsx(
          'text-lg xl:text-2xl',
          'empty:h-7 xl:empty:h-8',
          'relative',
          'text-center',

          'data-[state=done]:after:hidden',
          'after:inline-block',
          'after:absolute',
          'after:content-[""]',
          'after:w-0.5',
          'after:h-5 xl:after:h-[26px]',
          'after:ml-[1.5px]',
          'after:top-[3px] xl:after:top-[2.5px]',
          'after:bg-white',

          'data-[state=typing]:after:animate-none',
          'data-[state=erasing]:after:animate-none',
          'after:animate-blink',
        )}/>
      </div>
      <div className={clsx(
        'min-h-screen',
        'flex flex-col justify-center',
        'border-t-2 border-t-neutral-800',
        'py-8 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:64',
      )}>
        <Heading>About me</Heading>
        <Paragraph>
          Hello, {ip || <span className="animate-pulse bg-neutral-600 text-transparent rounded">00.000.00.000</span>},
          thanks for visiting my personal website. I'm an ambitious student interested in programming and engineering.
          I specialize in front-end development on React with all the ensuing technologies.
          In the future, I plan to try my hand at back-end development as well.
          If there is something you would like to discuss,
          don't hesitate to get in touch with me (see for links below).
        </Paragraph>

        <Heading>Website</Heading>
        <Paragraph>
          The first version of the site was coded by me in 3 days using Typescript, React, Remix and Tailwind, then deployed using Docker.
          There are several easter eggs in it. You can try to look for them yourself...
          or simply see them all in the code, which can be found on my <Link href="https://github.com/n8b8dy">Github</Link>
        </Paragraph>

        <Heading>Other projects</Heading>
        <BulletList>
          <li>
            manga.ovh - <i>the best</i> website for reading manga
          </li>
          <li>n8body’s helper - my personal telegram bot</li>
          <li>...and some more are being developed right now</li>
        </BulletList>
        <Heading>Contacts</Heading>
        <BulletList>
          {
            links.map(link => <li key={link.text}>
              <Link href={link.href}>{link.text}</Link>
            </li>)
          }
        </BulletList>
      </div>
    </MainLayout>
  )
}
