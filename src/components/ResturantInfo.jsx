import { useParams } from 'react-router-dom';
import Shimmer from './shimmer';
import useResturantMenu from '../customHooks/useResturantMenu';

function ResturantInfo() {

    const {resId} = useParams()

    const resInfo = useResturantMenu(resId)

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