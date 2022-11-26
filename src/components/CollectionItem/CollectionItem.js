import React from 'react'

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import './CollectionItem.css'

function CollectionItem({ item }) {
    console.log(item)
  return (
      <li className="collection_item">
          <div>
              <img src={item?.cover} alt={item?.title} />
          </div>
          <div className='collection_item_info'>
              <h2>{item.title}</h2>
              <div>
                  <p>{item.places}</p>
                  <ArrowRightIcon className='collection_item_info_icon'/>
              </div>
          </div>
    </li>
  )
}

export default CollectionItem