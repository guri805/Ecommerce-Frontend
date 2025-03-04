import React from 'react'

const Btn = ({type="", btnClassName="", btnName=""}) => {
  return (
    <>
        <button type={type}  className={btnClassName}> {btnName} </button> 
    </>
  )
}

export default Btn
