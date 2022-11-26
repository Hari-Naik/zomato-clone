import React from 'react'
import FilterItem from '../FilterItem/FilterItem'


import './Filters.css'

function Filters({filters}) {
  return (
      <ul className='filters'>
          {filters.map(filter => (
              <FilterItem key={filter?.id} filter={filter}/>
          ))}
      </ul>
  )
}

export default Filters