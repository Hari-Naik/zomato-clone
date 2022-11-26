import React from 'react'

import './DeliveryCollectionItem.css'

const DeliveryCollectionItem = ({item}) =>{
  return (
      <li  className='delivery_collection_item'>
          <img src={item?.cover} alt={item.title} />
          <p>{item.title}</p>
    </li>
  )
}

export default DeliveryCollectionItem