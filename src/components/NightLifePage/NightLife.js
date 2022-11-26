import React from 'react'

import { nightLife } from '../../Data/nightLife'
import Filters from '../Filters/Filters'
import ExploreSection from '../ExploreSection/ExploreSection';
import Collections from '../Collections/Collections';

import TuneIcon from '@material-ui/icons/TuneOutlined';
import ImportExportIcon from '@material-ui/icons/ImportExportOutlined';
import Footer from '../Footer/Footer';


const nightFilters = [
  {
    id: 1,
    icon: <TuneIcon className='filters_icon' />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Pro Offers",
  },
  {
    id: 3,
    title: "Distance",
    icon: <ImportExportIcon className='filters_icon' />,
  },
  {
    id: 5,
    title: "Rating: 4.0+",
  },
  {
    id: 4,
    title: "Pubs & Bars",
  },
];

const collectionList = [
  {
    id: 1,
    title: "Microbreweries",
    cover:
      "https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
    places: "29 Places",
  },
  {
    id: 2,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "22 Places",
  },
  {
    id: 3,
    title: "Artisan Cocktails",
    cover:
      "https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg",
    places: "20 Places",
  },
  {
    id: 4,
    title: "Happy Hours",
    cover:
      "https://b.zmtcdn.com/data/collections/67c4acc3f607dbcff71a8e1e77a70c8a_1535469199.jpg",
    places: "12 Places",
  },
  {
    id: 5,
    title: "Beer in a Bar",
    cover:
      "https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg",
    places: "5 Places",
  },
  {
    id: 6,
    title: "Bar-gain",
    cover:
      "https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg",
    places: "9 Places",
  },
];





function NightLife() {
   return (
     <div className='deliveryPage'>
       <Collections list={collectionList}/>
          <Filters filters={nightFilters} />
          <ExploreSection title="Nightlife Restaurants in Hyderabad" restaurantsData={nightLife}/>
        <Footer/>
     </div>
  )
}

export default NightLife