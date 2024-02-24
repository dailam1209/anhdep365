import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { Header } from "../header/header";
import Footer from "../footer/footer";
import TabSide from "../tabside/tabside";
import { Roboto } from "next/font/google";
import NestLayout from "./nestLayout/nestLayout";
import { TabSideContext } from "@/pages/_app";
import { useRouter } from "next/router";
import { LocationContext } from "@/pages/_app";
import { Type } from "../interface";
import styles from "@/commons/Slide/slide.module.css";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
});
export default function Layout({ children }: { children: ReactElement }) {
  const { isTabSide, setTabSide } = { ...useContext(TabSideContext) };
  const [ tabNet, setTabNet ] = useState<Boolean>(false);
  const { locationOfSite, setLocationOfSite }: Type = {
    ...useContext(LocationContext)
  };
  const pathname = usePathname()
  const currentWidthNavRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    console.log(pathname.includes('brand'));
    if (window.innerWidth < 800) {
      setTabSide(false);
    }
  }, [router]);


  return (
    <main className={roboto.className}>
      <Header />
      <NestLayout>
        <>
            <div ref={currentWidthNavRef} style={{
              position: !isTabSide ? "absolute" : undefined,
              left: !tabNet ? "-331px" : ""
            }}>
              <TabSide />
            </div>
          <div
            style={{
              marginTop: "30px",
              marginLeft: isTabSide ? locationOfSite.name === "home" ||  pathname.includes('brand')  ? "0px" : "331px" : '0px',
              width: isTabSide
                ?  pathname.includes('brand') ?  '100%' :  `calc(100% - 331px)`
                : "100%",
              transition: "all 0.4s",
            }}
          >
            {children}
          </div>
        </>
      </NestLayout>
      <Footer />
    </main>
  );
}
