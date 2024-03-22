import ResturantCard, { Veg } from "./ResturantCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";

const Body = () => {
  const [listData, setlistData] = useState([]);

  const [searchText, setsearchText] = useState("");

  const [filtered, setfiltered] = useState([]);


  const IsVeg = Veg(ResturantCard)

  const handleChange = (e) => {
    setsearchText(e.target.value);
  };

  const handleSearch = () => {
    if (searchText.trim() == "") {
      setfiltered(listData);
    } else {
      const searchedData = listData.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setfiltered(searchedData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );
    const ogData =
      response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setlistData(ogData);
    setfiltered(ogData);
  }

  const online = useOnlineStatus();

  if (online === false) {
    return <h1>Opps..Looks like there is no internet connection..!!!</h1>;
  }

  return listData.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          className="border mt-10  ml-20 mb-8  py-1 border-black rounded-md w-[250px]"
          type="text"
          value={searchText}
          onChange={handleChange}
          placeholder="Type search your favourite foods"
        />
        <button
          className="border border-black rounded-lg py-1 px-2 bg-slate-200 hover:bg-slate-600 hover:text-white"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="ml-[100px] border border-black py-1 px-2 rounded-md bg-slate-200 hover:bg-slate-600 hover:text-white"
          onClick={() => {
            const filteredData = listData.filter(
              (res) => res.info.avgRating > 4.3
            );
            setfiltered(filteredData);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="flex flex-wrap">
        {filtered.map((resturant) => {
          return (
            <Link
              key={resturant.info.id}
              to={"/resturant/" + resturant.info.id}
            >
              {resturant.info.veg ? (
                <IsVeg resData={resturant}/>
                ):(
              <ResturantCard resData={resturant} />
                )
              }
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default Body;
