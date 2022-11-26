import React from 'react'

import Filters from '../Filters/Filters'
import DeliveryCollections from '../DeliveryCollections/DeliveryCollections';

import TuneIcon from '@material-ui/icons/TuneOutlined';
import ImportExportIcon from '@material-ui/icons/ImportExportOutlined';


import './Delivery.css'
import Brands from '../BrandsSection/Brands';
import ExploreSection from '../ExploreSection/ExploreSection';
import { restaurants } from '../../Data/restaurants'
import Footer from '../Footer/Footer';



const deliveryFilters = [
  {
    id: 1,
    icon: <TuneIcon className='filters_icon' />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Delivery Time",
    icon: <ImportExportIcon className='filters_icon' />,
  },
  {
    id: 3,
    title: "Rating: 4.0+",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Cuisines",
  },

  {
    id: 6,
    title: "More Filters",
  },
];


function Delivery() {
  return (
    <div className='deliveryPage'>
      <Filters filters={deliveryFilters} />
      <DeliveryCollections />
      <Brands />
      <ExploreSection title="Order food online in Charminar" restaurantsData={restaurants} delivery/>
      <Footer/>
    </div>
  )
}

export default Delivery