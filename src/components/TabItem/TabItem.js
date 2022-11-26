import React, { useContext } from 'react'
import Context from '../../Context/Context'

import "./TabItem.css"

function TabItem({ tab, tabId, isActive }) {
    const { onSetActiveTabId } = useContext(Context)

    const ImgUrl = isActive ? (tab.active_img) : (tab.inactive_img)

    const myFunc = () => {
        switch (tabId) {
            case 'Delivery':
                return "delivery"
            case 'Dining Out':
                return 'diningOut'
            default:
                return 'nightLife'

        }
    }

    let style = myFunc()

    return (
        <li onClick={() => onSetActiveTabId(tab.name)} className={isActive ? "style" : ''} >
            <div className={isActive ? (style) : ''}>
                <img src={ImgUrl} alt={tab.name} />
            </div>
            <h1 className={isActive ? "color" : ''}>{tab.name}</h1>
        </li>
    )



}

export default TabItem