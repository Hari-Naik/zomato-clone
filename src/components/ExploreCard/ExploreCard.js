import React from 'react'

import StarRateIcon from '@material-ui/icons/StarRate';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

import './ExploreCard.css'

function ExploreCard({ restaurant, isDelivery }) {

    const imageUrl = restaurant?.info?.image?.url;
    const name = restaurant?.info?.name;
    const rating = restaurant?.info?.rating?.aggregate_rating;
    const cuisines = restaurant?.info?.cuisine.slice(0, 3).map(cuisine => cuisine.name);
    const price = restaurant?.info?.costText?.text;
    const noOfOrders = restaurant?.bottomContainers[0]?.text;

    // const style = {
    //     backgroudImage: 'url("https://b.zmtcdn.com/data/pictures/chains/8/800228/b4975f178b8c9264498a65735f5d4263_o2_featured_v2.jpg")',
    //     backgroundSize: "cover",
    // }


    // return (
    //     <li className="exploreCard">
    //             <img src={imageUrl} alt={name} />
    //             <div className="exlporeCard_info">
    //                 <div className="restaurantName_rating">
    // <h2>{name}</h2>
    // <div className="rating">
    //     <p>{rating}</p>
    //     <StarRateIcon className="starIcon" />
    // </div>
    //                 </div>
    //                 <div className="cuisines_price">
    //                     <small>{cuisines.join(', ')}</small>
    //                     <p>{price}</p>
    //                 </div>
    //             </div>
    //             <div className='hr_line'></div>
    //             <div className="noOfOrders">
    // <div>
    //     <TrendingUpIcon className='noOfOrders_icon' />
    // </div>
    // <small>{noOfOrders}</small>
    //             </div>
    //     </li>
    // )

    return (
        <li className='explore_card'>
            <div className="img_container">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="explore_card_info">
                <h2>{name}</h2>
                <div className="rating">
                    <p>{rating}</p>
                    <StarRateIcon className="starIcon" />
                </div>
            </div>
            <div className="explore_card_info">
                <p>{cuisines.join(', ')}</p>
                <p>{price}</p>
            </div>
            {isDelivery && (
                <>
                    <div className="hr_line"></div>
                    <div className="orders_placed">
                        <div>
                            <TrendingUpIcon className='orders_placed_icon' />
                        </div>
                        <small>{noOfOrders}</small>
                    </div>
                </>
            )}
        </li>
    )
}

export default ExploreCard