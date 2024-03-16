import ResturantCard from "./ResturantCard";
import apiObj  from "./utils/mockData";
import { useState , useEffect} from "react";
import axios from "axios";

const Body = () => {

  const [listData,setlistData] = useState(apiObj)

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData() {
    const response = await axios(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );
    const ogData = response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    console.log(ogData);
    setlistData(ogData)
};

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