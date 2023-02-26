import type { FC, PropsWithChildren } from 'react'

export const Paragraph: FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className="text-xl text-justify leading-7 font-light">{children}</p>
  )
}
