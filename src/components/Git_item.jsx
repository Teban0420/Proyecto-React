
import React from 'react'

export const Git_item = ({title, url}) => {
    
    // diseño html del componente
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
    
  )
}
