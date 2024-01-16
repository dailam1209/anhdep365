import { ReactElement } from "react";
import styles from './nestLayout.module.css'
export default function NestLayout({children}:{children:ReactElement}){
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}