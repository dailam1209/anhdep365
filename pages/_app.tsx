import { LocationOfSite } from '@/component/interface'
import Layout from '@/component/layout/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Context, createContext, useContext, useState } from 'react'

export const LocationContext = createContext({locationOfSite:{name:''},setLocationOfSite : (state: LocationOfSite) => {}})
export const TabSideContext = createContext({isTabSide:true,setTabSide : (state: boolean) => {}})
export default function App({ Component, pageProps }: AppProps) {
  const [locationOfSite, setLocationOfSite] = useState<LocationOfSite>({name:'home'})
  const [isTabSide, setTabSide] = useState<boolean>(true)
  return (
    <LocationContext.Provider value={{locationOfSite, setLocationOfSite}}>
      <TabSideContext.Provider value={{isTabSide, setTabSide}}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TabSideContext.Provider>
    </LocationContext.Provider>
  )
}
