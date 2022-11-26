
import React from 'react'


import ExploreCard from '../ExploreCard/ExploreCard'



import './ExploreSection.css'

function ExploreSection({title, restaurantsData, delivery}) {
    return (
        <div className='exploreSection'>
            <div className="explore_container">
                 <h1>{title}</h1>
            <ul>
                {restaurantsData.map(restaurant => (
                    <ExploreCard key={restaurant?.info?.resId} restaurant={restaurant} isDelivery={delivery} />
                ))}

            </ul>
            </div>
        </div>
    )
}

export default ExploreSection