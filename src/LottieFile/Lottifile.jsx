import React , {useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import  './Lottifie.css'
import { useTranslation } from "react-i18next";
export default function Lottifile() {
    const [t] = useTranslation("global");
const container = useRef(null)
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('./img/area-map.json')
        })
    }, [])
    return (
        <>
        <div className="container-Lotti" ref={container}/>
        <p style={{ textAlign:'center'}}>  {t("map.recherche")}</p>
        </>
         
            
     
    )
}
