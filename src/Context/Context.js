import React from "react";


const Context = React.createContext({
    activeTabId: 'Delivery',
    onSetActiveTabId:()=>{}
})

export default Context