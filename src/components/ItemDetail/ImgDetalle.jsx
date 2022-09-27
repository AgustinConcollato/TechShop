import React from "react"

const ImgDetalle = ({src, alt, setImgActual}) =>{
    return(
        <div className="imgDetalle" onMouseMove={()=> setImgActual(src)} >
            <img className="imgLaterales" src={src} alt={alt} />
        </div>
    )
}

export default ImgDetalle