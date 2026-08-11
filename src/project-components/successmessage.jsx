import React from 'react'
import './successmessage.css'
export const SuccessMessage = ({image, alt, message}) => {
 
  return (
    <div className="message-container">
      <img src={image} alt={alt} /><h3 style={{textDecoration: 'none'}}>&nbsp;&nbsp;{message}</h3>
    </div>
  )
}


