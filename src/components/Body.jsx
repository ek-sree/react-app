import ResturantCard from "./ResturantCard";
import apiObj  from "./utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listData,setlistData] = useState(apiObj)

console.log(listData);
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filteredData = listData.filter((res)=>res.info.avgRating > 4.5)
            setlistData(filteredData)
          }}>Top Rated Resturant</button>
        </div>
        <div className="res-container">
          {listData.map((resturant) => {
            return <ResturantCard key={resturant.info.id} resData={resturant} />;
          })}
        </div>
      </div>
    );
  };
  
  export default Body;