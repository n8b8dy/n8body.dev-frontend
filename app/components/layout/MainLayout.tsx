import type { FC, PropsWithChildren } from 'react'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container mx-auto flex flex-col">
      {children}
    </div>
  )
}
