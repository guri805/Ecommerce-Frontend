import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
const ProductZoom = ({src, className}) => {
    return (
        <>
            <InnerImageZoom
                zoomType='hover'
                zoomScale={1}
                src={src}
                className={className}
            />
        </>
    )
}

export default ProductZoom
