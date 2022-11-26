import React from 'react'
import Slider from 'react-slick';
import BrandItem from '../BrandItem/BrandItem';
import NextArrow from '../carousel/NextArrow';
import PrevArrow from '../carousel/PrevArrow';

import './Brands.css'


const topBrandsList = [
    {
        id: 1,
        title:"La Pino'z Pizza",
        time: "35 min",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png?output-format=webp",
    },
    {
        id: 2,
        title:"McDonald's",
        time: "29 min",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png?output-format=webp",
    },
    {
        id: 3,
        title:"T.H.F",
        time: "32 min",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png?output-format=webp",
    },
    {
        id: 4,
        title:"Domino's Pizza",
        time: "30 min",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521806382.png?output-format=webp",
    },
    {
        id: 6,
        title:"Burger King",
        time: "38 min",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png?output-format=webp",
    },
    {
        id: 7,
        title:"Royal Cafe",
        time: "31 min",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png?output-format=webp",
    },
    {
        id: 8,
        title:"KFC",
        time: "30 min",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png?output-format=webp",
    },
    {
        id: 9,
        title:"Kwality Wall's",
        time: "40 min",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/e12f7587d0a5f589af54c88352ff8bf3_1628325081.png?output-format=webp",
    },
    {
        id: 10,
        title:"Aryan",
        time: "35 min",
        cover:
            "https://b.zmtcdn.com/data/brand_creatives/logos/9fd44dce68f59d5a4f63e7c426c4c282_1605106153.png?output-format=webp",
    },
];


const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
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


function Brands() {
    return (
        <div className='brands'>
            <div className="brands_container">
                <h1>Top brands for you</h1>
                <ul className='brands_item'>
                    <Slider {...settings}>
                        {topBrandsList.map(brand => (
                            <BrandItem key={brand.id} brand={brand} />
                        ))}
                    </Slider>
                </ul>
            </div>
        </div>
    )
}

export default Brands