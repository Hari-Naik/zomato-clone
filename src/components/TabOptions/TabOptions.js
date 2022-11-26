import React from 'react'
import TabItem from '../TabItem/TabItem';

import Context from '../../Context/Context';


import './TabOptions.css'


const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    backdrop: "#FCEEC0",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },
  {
    id: 2,
    name: "Dining Out",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backdrop: "#E5F3F3",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
  },
  {
    id: 3,
    name: "Nightlife",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    backdrop: "#EDf4FF",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
  },
];


function TabOptions() {
  const { activeTabId } = React.useContext(Context)
  
  return (
    <div className='tabOptions'>
      <div className="tabOption">
        <small>Home / India / Hyderabad Restaurants </small>
        <ul>
          {tabs.map(tab => (
            <TabItem key={tab.id} tab={tab} tabId={activeTabId} isActive={activeTabId === tab.name} />
          ))}
        </ul>   

      </div>
    </div>
  )
}

export default TabOptions