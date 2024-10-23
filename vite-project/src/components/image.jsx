import React from 'react'

export const Image = (props) => {
  return (
    <div className="ImageWrapper">
    <img className="DogImage" src={props.RandomImage}/>
    </div>
  )
}
