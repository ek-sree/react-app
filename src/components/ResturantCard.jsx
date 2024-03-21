import { CDN_URL } from "./utils/contants";

const ResturantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, cuisines, areaName, costForTwo, avgRating, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className="m-4 ml-8 p-4 w-[250px] h-[470px] shadow-md hover:scale-90 hover:ease-in duration-500 hover:bg-slate-200 rounded-sm">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="card-img"
      />
      <h3 className="font-bold font-serif py-2 items-center">{name}</h3>
      <h4 className="text-sm truncate">{cuisines.join(",")}</h4>
      <h4>{areaName}</h4>
      <h4>Rs.{costForTwo} only/-</h4>
      <h4>{resData.info.sla.deliveryTime} min takes</h4>
      <h4>{avgRating} star</h4>
    </div>
  );
};


export const ResturantWithPromoted=()=>{
  return()=>{
    return(
      <div>
        <label>Promoted</label>
        <ResturantCard/>
      </div>
    )
  }
}

export default ResturantCard;
