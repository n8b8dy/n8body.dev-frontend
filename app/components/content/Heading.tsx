import type { FC, PropsWithChildren } from 'react'

export const Heading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h4 className="text-2xl mt-4 first:mt-0 mb-2 last:mb-0">{children}</h4>
  )
}
