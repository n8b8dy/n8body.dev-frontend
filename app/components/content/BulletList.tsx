import type { FC, PropsWithChildren } from 'react'

export const BulletList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className="list-disc list-inside pl-4 text-xl leading-7 font-light">
      {children}
    </ul>
  )
}
