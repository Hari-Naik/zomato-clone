import React from 'react'

import Slider from "react-slick";
import NextArrow from '../carousel/NextArrow';
import PrevArrow from '../carousel/PrevArrow';

import CollectionItem from '../CollectionItem/CollectionItem';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import './Collections.css'

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
}


function Collections({ list }) {
    return (
        <div className='collections'>
            <div className="collections_container">
                <h2>Collections</h2>
                <div>
                    <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends</p>
                    <div>
                        <p>All Collections in Hyderabad</p>
                        <ArrowRightIcon />
                    </div>
                </div>
                <ul className='collection_items'>
                    <Slider {...settings}>
                        {list.map(eachItem => (
                            <CollectionItem key={eachItem.id} item={eachItem} />
                        ))}
                    </Slider>

                </ul>
            </div>
        </div>
    )
}

export default Collections