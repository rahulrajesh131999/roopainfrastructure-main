//detects the clicks outside

import { useEffect } from "react"

export const onClickOutSide=(ref,handler)=>{
    useEffect(()=>{
        const listner=(e)=>{
            if(!ref.current || ref.current.contains(e.target)){
                return
            }
            handler(e)
        }
        document.addEventListener("mousedown",listner)
        document.addEventListener("touchstart",listner)

        return()=>{
            document.removeEventListener("mousedown",listner)
            document.removeEventListener("touchstart",listner)
        }
    },[ref,handler])
}