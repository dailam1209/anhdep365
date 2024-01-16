import { useContext, useEffect} from "react"
import { Type } from "@/component/interface"
import { LocationContext } from "../_app"

export default function Application() {
  const {locationOfSite, setLocationOfSite}:Type = {...useContext(LocationContext)}
  useEffect(()=>{
    if(locationOfSite?.name != 'application'){
      setLocationOfSite({name:'application'})
    }
  },[])
  return (
    <div style={{width:'85%'}}>Ứng dụng</div>
  )
}