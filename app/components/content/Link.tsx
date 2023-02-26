import type { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

export type LinksProps = PropsWithChildren & { href: string }

export const Link: FC<LinksProps> = ({ children, href }) => {
  return (
    <a className={clsx(
      'mx-[-.25rem] px-[.25rem]',
      'shadow-[inset_0_0_0_0_neutral-200]',
      'text-white',
      'transition-color duration-500 ease-in-out',
      'z-10',

      'hover:shadow-[inset_100px_0_0_0_white]',
      'hover:text-black',
    )} href={href}>{children}</a>
  )
}
