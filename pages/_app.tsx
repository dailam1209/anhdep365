import { LocationOfSite } from "@/component/interface";
import Layout from "@/component/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Context, createContext, useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import NavMobile from "./photo/commons/navbarMobile/navMobile";

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
  const isMobileCheck: boolean = useMediaQuery({
    query: "(max-width: 430px)"
  });
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
