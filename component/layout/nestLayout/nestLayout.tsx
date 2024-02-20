import { ReactElement, useContext } from "react";
import styles from './nestLayout.module.css'
import { TabSideContext } from "@/pages/_app";
export default function NestLayout({children}:{children:ReactElement}){
    const {isTabSide, setTabSide} = {...useContext(TabSideContext)};
    return(
        <div className={styles.container} style={{
            justifyContent: !isTabSide ? 'center' : ''
        }}>
                {children}
        </div>
    )
}