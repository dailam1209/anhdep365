import { useContext, useEffect} from "react"
import { Type } from "@/component/interface"
import { LocationContext } from "../_app"

export default function Brand() {
  const {locationOfSite, setLocationOfSite}:Type = {...useContext(LocationContext)}
  useEffect(()=>{
    if(locationOfSite?.name != 'brand'){
      setLocationOfSite({name:'brand'})
    }
  },[])
  return (
    <div style={{width:'85%'}}>Thương hiệu</div>
  )
}