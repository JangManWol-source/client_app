import React from 'react'

const Card = (props) => {
  return (
    <div className={`bg-white ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card