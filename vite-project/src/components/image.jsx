import React from 'react'
import "./css/image.css"

export const Image = (props) => {
  return (
    <div className="ImageWrapper">
    <img className="DogImage" src={props.RandomImage}/>
    </div>
  )
}
