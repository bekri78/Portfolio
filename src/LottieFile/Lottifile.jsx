import React , {useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import  './Lottifie.css'
export default function Lottifile() {
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
        <p style={{ textAlign:'center'}}>Je recherche les meilleurs itinéraires...</p>
        </>
         
            
     
    )
}
