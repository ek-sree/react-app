import ResturantCard from "./ResturantCard";
import { useState , useEffect} from "react";
import axios from "axios";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {

  const [listData,setlistData] = useState([])

  const [searchText, setsearchText] = useState("")

  const [filtered, setfiltered] = useState([])

  const handleChange=(e) =>{
      setsearchText(e.target.value)
  } 

  const handleSearch =()=>{
    if(searchText.trim()==""){
      setfiltered(listData)
    }else{
    const searchedData = listData.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    setfiltered(searchedData)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData() {
    const response = await axios(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );
    const ogData = response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setlistData(ogData)
    setfiltered(ogData)
};

    return listData.length==0 ? <Shimmer/>:(
      <div className="body">
        <div className="filter">
          <input type="text" value={searchText} onChange={handleChange} />
          <button onClick={handleSearch}>Search</button>
          <button className="filter-btn" onClick={()=>{
            const filteredData = listData.filter((res)=>res.info.avgRating > 4.3)
            setfiltered(filteredData)
          }}>Top Rated Resturant</button>
        </div>
        <div className="res-container">
          {filtered.map((resturant) => {
            return <Link key={resturant.info.id} to={"/resturant/"+resturant.info.id}><ResturantCard  resData={resturant} /></Link>;
          })}
        </div>
      </div>
    );
  };
  
  export default Body;