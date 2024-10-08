import './App.css'

import CardItem from './components/CardItem/index'
import NewLaunch from './components/NewLaunch'

const cardsList = [
  {
    id: 1,
    title: 'Echant New Sofa Set',
    amount:'₹ 45,890',
    price:'₹ 60,000',
    discount:'11% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364859/sofa-living-room-decorated-with-brazilian-folklore-design_lqfmg6.jpg',
    className: 'card-1',
  },
  {
    id: 2,
    title: '3 Seat Sofa Set',
    amount:'₹ 45,890',
    price:'₹ 60,000',
    discount:'11% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364872/3d-rendering-loft-luxury-living-room-with-bookshelf_ixkndj.jpg',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'Wooden Sofa Set',
    amount:'₹ 45,890',
    price:'₹ 60,000',
    discount:'11% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364859/sofa-living-room-decorated-with-brazilian-folklore-design_lqfmg6.jpg',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'Sofas & Couches',
    amount:'₹ 45,890',
    price:'₹ 60,000',
    discount:'11% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364820/modern-living-room-interior-design_xpxe80.jpg',
    className: 'card-4',
  },
  {
    id: 5,
    title: 'Sofa Set with Center Table',
    amount:'₹ 45,890',
    price:'₹ 60,000',
    discount:'11% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364731/modern-living-room-interior-design_1_c2welr.jpg',
    className: 'card-1',
  },
  {
    id: 6,
    title: 'Furnesho Wooden',
    amount:'₹ 45,890',
    price:'₹ 60,000',
    discount:'11% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364694/minimalistic-living-room-design_nqpw4p.jpg',
    className: 'card-2',
  },
  {
    id: 7,
    title: 'Georgia Wooden Sofa set',
    amount:'₹ 45,890',
    price:'₹ 60,000',
    discount:'11% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364672/3d-rendering-loft-luxury-living-room-with-bookshelf_b4ix4c.jpg',
    className: 'card-3',
  },
  {
    id: 8,
    title: 'Technology CLoth Sofa',
    amount:'₹ 45,890',
    price:'₹ 60,000',
    discount:'11% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364652/3d-rendering-loft-luxury-living-room-with-bookshelf_1_bywn27.jpg',
    className: 'card-4',
  },
  {
    id: 9,
    title: 'Technology Cloth Sofa',
    amount:'₹ 45,890',
    price:'₹ 60,000',
    discount:'11% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364621/realistic-interior-design-with-furniture_1_asqjtj.jpg',
    className: 'card-1',
  },
  {
    id: 10,
    title: 'Seater leather tufted sofa Set',
    amount:'₹ 45,890',
    price:'₹ 60,000',
    discount:'11% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364565/modern-styled-entryway_ocfmsf.jpg',
    className: 'card-2',
  },
  {
    id: 11,
    title: 'Leather Sofa set',
    amount:'₹ 45,890',
    price:'₹ 60,000',
    discount:'11% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728363841/sofa-living-room-decorated-with-brazilian-folklore-design_jj5dtv.jpg',
    className: 'card-3',
  },
  {
    id: 12,
    title: 'Leather Sofa Set',
    amount:'₹ 45,890',
    price:'₹ 60,000',
    discount:'11% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364565/modern-styled-entryway_ocfmsf.jpg',
    className: 'card-4',
  },
]

const NewLaunches = [
  {
    id: 1,
    title: 'Single Beds',
    amount:'Starts only at ₹ 33,680/-',
    discount:'10% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364859/sofa-living-room-decorated-with-brazilian-folklore-design_lqfmg6.jpg',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'Centaur Wood Beside Table',
    amount:'Starts only at ₹ 40,300/-',
    discount:'8% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364872/3d-rendering-loft-luxury-living-room-with-bookshelf_ixkndj.jpg',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'TV Unit (Moldau Acacia)',
    amount:'Starts only at ₹ 20,800/-',
    discount:'15% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364859/sofa-living-room-decorated-with-brazilian-folklore-design_lqfmg6.jpg',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'Pooja Room',
    amount:'Starts only at ₹ 55,000/-',
    discount:'13% Off',
    imgUrl: 'https://res.cloudinary.com/dqn2mov1u/image/upload/v1728364820/modern-living-room-interior-design_xpxe80.jpg',
    className: 'card-4',
  }
]

const App = () => (
  <div>
    <div className="list-container">
      <h1 className="heading">Sofa Sets</h1>
      <p className="para">Sofa Sets are available for Sale have glance on its!!</p>
      <ul className="list-cards-container">
        {cardsList.map(eachItem => (
          <CardItem cardDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
    <div className="new-list-container">
      <h1 className="new-heading">New Launches</h1>
      <p className="new-para">Explorefurnitures online and find the one that's perfect for you!</p>
      <ul className="list-cards-container">
        {NewLaunches.map(eachItem => (
          <NewLaunch cardDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  </div>
)

export default App
