"use client"
import { LocationOfSite } from "@/component/interface";
import Layout from "@/component/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Context, createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import NavMobile from "@/commons/navbarMobile/navMobile";

export const LocationContext = createContext({
  locationOfSite: { name: "" },
  setLocationOfSite: (state: LocationOfSite) => {}
});
export const TabSideContext = createContext({
  isTabSide: true,
  setTabSide: (state: boolean) => {}
});
export default function App({ Component, pageProps }: AppProps) {
  const [locationOfSite, setLocationOfSite] = useState<LocationOfSite>({
    name: "home"
  });
  const [isTabSide, setTabSide] = useState<boolean>(true);
  const [ count, setCount ] = useState<number>(0);
  const isMobileCheck: boolean = useMediaQuery({
    query: "(max-width: 430px)"
  });

  useEffect(() => {
    const handleResize = () => {
      if(count < 1) {
        setTabSide(true);
        return 0;
      }
      if (typeof window !== "undefined" && window.innerWidth <= 912) {
        setTabSide(false);
      } else {
        setTabSide(true);
      }
      setCount(1);
  };

  if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }
  }, [])
  return (
    <LocationContext.Provider value={{ locationOfSite, setLocationOfSite }}>
      <TabSideContext.Provider value={{ isTabSide, setTabSide }}>
        <Layout>
          <>
            <Component {...pageProps} />
            {isMobileCheck && <NavMobile/>}
          </>
        </Layout>
      </TabSideContext.Provider>
    </LocationContext.Provider>
  );
}
