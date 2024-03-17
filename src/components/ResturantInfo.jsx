import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Shimmer from './shimmer';

function ResturantInfo() {

    const {resId} = useParams()

    const [resInfo, setresInfo]=useState([])


    useEffect(()=>{
        fetchData()
    },[])

    const fetchData= async()=>{
        const data = await axios("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId);
        setresInfo(data)
    }
    if(resInfo.length===0){
        return <Shimmer/>
    }
    const{name, cuisines, costForTwoMessage} = resInfo?.data?.data?.cards[0]?.card?.card?.info || {};
    const itemCards = resInfo?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

   
  return (
    <div><h1>{name}</h1>
    <h2>{cuisines}</h2>
    <h2>{costForTwoMessage}</h2>
    <ul>
        {itemCards.map(item=> <li key={item.card.info.id}> {item.card.info.name} - Rs. {item.card.info.price /100}</li>)}
    </ul>
    </div>
  )
}

export default ResturantInfo