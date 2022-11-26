import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Context from '../Context/Context'

function MainTabItem({ item }) {
    const {onSetActiveTabId} = useContext(Context)
    const navigate = useNavigate()

    
    const onClickTabItem = () => {
        onSetActiveTabId(item.name)
        navigate('/home')
    }
    return (
        <Link to={`/${item.name}`} className="tabItem">
        <li key={item.id} onClick={onClickTabItem}>
            <img src={item.imgUrl} alt={item.title} />
            <div className="tabItem__content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        </li>
        </Link>
    )
}

export default MainTabItem