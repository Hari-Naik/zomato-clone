import React, { useContext } from 'react'
import Delivery from '../DeliveryPage/Delivery'
import Header from '../Header/Header'
import TabOptions from '../TabOptions/TabOptions'
import DiningOut from '../DiningOutPage/DiningOut'
import NightLife from '../NightLifePage/NightLife'

import Context from '../../Context/Context'



function HomePage() {
  const {activeTabId} = useContext(Context)
  // const [activeTabId, setactiveTabId] = React.useState("Delivery");

  // const onSetActiveTabId = (name) => {
  //   setactiveTabId(name)

  // }

  // console.log(activeTabId)

  const getTabPages = () => {
    switch (activeTabId) {
      case 'Delivery':
        return <Delivery />
      case 'Dining Out':
        return <DiningOut />
      default:
        return <NightLife />
    }
  }

  return (
      <div className="homePage">
        <Header />
        <TabOptions />
        {getTabPages()}
      </div>
  )

  // return (
  //   <div className='homePage'>
  //     <Header />
  //     <TabOptions />
  //     <Delivery />
  //     {/* <DiningOut/> */}
  //   </div>
  // )
    
}

export default HomePage