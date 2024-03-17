import { useEffect, useState } from "react";
import { MENU_API } from "../components/utils/contants";
import axios from "axios";

const useResturantMenu= (resId)=>{

    const [resInfo, setresInfo] = useState([])

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async()=>{
    try {
       
            const data = await axios(`${MENU_API}/${resId}`)
            setresInfo(data)
    } catch (error) {
        console.log("error fetching menu data",error);
    }
    
    }

    return resInfo;
}

export default useResturantMenu;