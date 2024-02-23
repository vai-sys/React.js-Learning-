// import React, { useState } from 'react';
// import RestaurantCard from './RestaurantCard';
// import resObj from '../utils/Mockdata';
// import { Link } from 'react-router-dom';

// const Body = () => {
//   const [listOfRestau, setListOfRestau] = useState(resObj);
//   const [searchText, setSearchText] = useState(" ");

//   const handleFilter = () => {
//     const filteredList = resObj.filter((res) => res.data.avgRating > 4);
//     setListOfRestau(filteredList);
//   };

//   const handleSearch = () => {
//     const filteredRestu = resObj.filter((res) =>
//       res.data.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setListOfRestau(filteredRestu); 
//   };

//   return (
//     <>
   
//     <div className='body'>
//       <div className='filter'>
//         <button className='filter-btn' onClick={handleFilter}>
//           Top Rated Restaurants
//         </button>
//         <div className='Search'>
//           <form onSubmit={(e) => {
//             e.preventDefault();
//             handleSearch();
//           }}>
//             <input
//               type='text'
//               className='Search-box'
//               value={searchText} 
//               onChange={(e) => setSearchText(e.target.value)}
//             />
//             <button type="submit">Search</button>
//           </form>
//         </div>
//       </div>

//       <div className='res-container'>
//         {listOfRestau.map((restaurant) => (
//           <Link to={"/restaurants/"}>
//            <RestaurantCard key={restaurant.data.id} resData={restaurant} /></Link>
         
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };


// export default Body;






import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import restaurant_data from '../utils/Mockdata';
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRestau, setListOfRestau] = useState(restaurant_data);
  const [searchText, setSearchText] = useState(" ");

  const handleFilter = () => {
    const filteredList = restaurant_data.filter((res) => res.data.avgRating > 4);
    setListOfRestau(filteredList);
  };

  const handleSearch = () => {
    const filteredRestu = restaurant_data.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestau(filteredRestu); 
  };

  return (
    <>
      <div className='body'>
        <div className='filter'>
          <button className='filter-btn' onClick={handleFilter}>
            Top Rated Restaurants
          </button>
          <div className='Search'>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}>
              <input
                type='text'
                className='Search-box'
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>

        <div className='res-container'>
          {listOfRestau.map((restaurant, index) => (
            <Link to={"/restaurants/" + index} key={index} style={{textDecoration:"none", color:"black"}}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;








