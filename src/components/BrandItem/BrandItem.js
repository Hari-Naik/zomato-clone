import React from 'react'

import './BrandItem.css'

function BrandItem({brand}) {
  return (
      <li className='brandItem'>
          <img src={brand?.cover} alt="brand" />
          <p>{brand.title}</p>
          <small>{brand.time}</small>
    </li>
  )
}

export default BrandItem