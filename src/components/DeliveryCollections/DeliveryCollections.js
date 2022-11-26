import React from 'react'
import Slider from "react-slick";
import NextArrow from '../carousel/NextArrow';
import PrevArrow from '../carousel/PrevArrow';
// import FlipMove from 'react-flip-move';

import DeliveryCollectionItem from '../DeliveryCollectionItem/DeliveryCollectionItem';

import './DeliveryCollections.css'



// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         background: "#ff7e8b",
//         borderRadius: "50%",
//       }}
//       onClick={onClick}
//     ></div>
//   );
// };

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         background: "#ff7e8b",
//         borderRadius: "50%",
//       }}
//       onClick={onClick}
//     ></div>
//   );
// };




const deliveryItems = [
  {
    id: 1,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 2,
    title: "Burger",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
  },
  {
    id: 3,
    title: "Rolls",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/e61347d2b01cfae669530bd4b8e778e41632716577.png",
  },
  {
    id: 4,
    title: "Cake",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
  },
  {
    id: 5,
    title: "Biryani",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
  },
  {
    id: 6,
    title: "Chaat",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
  },
  {
    id: 7,
    title: "Momos",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
  },
  {
    id: 8,
    title: "Paneer",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
  },
  {
    id: 9,
    title: "Samosa",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
  },
  {
    id: 10,
    title: "Paratha",
    cover:
      "https://b.zmtcdn.com/data/dish_images/49a62bf16f88e7d22994e387626292161632717505.png",
  },
  {
    id: 11,
    title: "Pastry",
    cover:
      "https://b.zmtcdn.com/data/homepage_dish_data/4/f06d9a57b0847677e36f163a7b7fe54a.png",
  },
];


const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>,
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


function DeliveryCollections() {

  return (
    <div className='delivery_collections'>
      <div className="delivery_collections_container">
        <h2>Inspiration for your first order</h2>
        <ul className='delivery_collection_items'>

          <Slider {...settings}>
            {deliveryItems.map(eachItem => (
              <DeliveryCollectionItem key={eachItem.id} item={eachItem} />
            ))}
          </Slider>

        </ul>
      </div>
    </div>
  )
}

export default DeliveryCollections