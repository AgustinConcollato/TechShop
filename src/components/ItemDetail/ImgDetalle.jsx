import React from "react"

const ImgDetalle = ({src, alt, setImgActual}) =>{
    return(
        <div key={src.id} className="imgDetalle" onMouseMove={()=> setImgActual(src.url)} >
            <img className="imgLaterales" src={src.url} alt={alt} />
        </div>
    )
}

export default ImgDetalle