import { ReactElement, useContext, useEffect } from "react";
import { Header } from "../header/header";
import Footer from "../footer/footer";
import TabSide from "../tabside/tabside";
import { Roboto } from 'next/font/google'
import NestLayout from "./nestLayout/nestLayout";
import { TabSideContext } from "@/pages/_app";
import { useRouter } from "next/router";
import { LocationContext } from '@/pages/_app'
import { Type } from '../interface'


const roboto = Roboto({ 
    weight: '400',
    style: 'normal',
    subsets: ['latin']
  })
export default function Layout({children}:{children: ReactElement}){
    const {isTabSide, setTabSide} = {...useContext(TabSideContext)}
    const {locationOfSite , setLocationOfSite}:Type = {...useContext(LocationContext)}
    const router  = useRouter()
    useEffect(()=>{
        if(window.innerWidth < 800){
            setTabSide(false)
          }
    },[router])
    return(
        <main className={roboto.className}>
            <Header/>
            <NestLayout>
                <>
                    {isTabSide && locationOfSite.name == 'home' || isTabSide && locationOfSite.name == 'project' ? <TabSide/> : '' }
                    {locationOfSite.name == 'sample' && <TabSide/> }
                    {children}
                </>
            </NestLayout>
            <Footer/>
        </main>
    )
}