import { useContext, useEffect} from "react"
import { Type } from "@/component/interface"
import { LocationContext } from "../_app"

export default function Sample() {
  const {locationOfSite, setLocationOfSite}:Type = {...useContext(LocationContext)}
  useEffect(()=>{
    if(locationOfSite?.name != 'sample'){
      setLocationOfSite({name:'sample'})
    }
  },[])
  return (
    <div style={{width:'85%'}}>Mẫu</div>
  )
}