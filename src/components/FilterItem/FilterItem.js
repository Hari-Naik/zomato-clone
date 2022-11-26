import React from 'react'



import './FilterItem.css'

function FilterItem({ filter }) {
    
    
  return (
      <li className='filterItem'>
          {filter.icon && filter.icon}
          <p>{filter.title}</p>
    </li>
  )
}

export default FilterItem