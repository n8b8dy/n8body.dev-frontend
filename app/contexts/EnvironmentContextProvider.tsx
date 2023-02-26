import type { FC, ReactNode } from 'react'
import { createContext } from 'react'

import { EnvironmentMap, EnvironmentVar } from '~/types/environment'

export type EnvironmentContextProviderProps = {
  children: ReactNode,
  environment: EnvironmentMap,
}

export type EnvironmentContextData = {
  getVariable: (key: string) => EnvironmentVar,
}

export const EnvironmentContext = createContext<EnvironmentContextData>({
  getVariable: () => undefined,
})

export const EnvironmentContextProvider: FC<EnvironmentContextProviderProps> = ({ children, environment }) => {
  const getVariable = (key: string) => environment[key]

  return <EnvironmentContext.Provider value={{
    getVariable,
  }}>
    {children}
  </EnvironmentContext.Provider>
}
