import { CDN_URL } from "./utils/contants";

const ResturantCard = (props) => {
  const { resData } = props;
  {console.log(resData,"rrr");}
  const { name, cuisines, areaName, costForTwo, avgRating, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
        alt="card-img"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{areaName}</h4>
      <h4>Rs.{costForTwo} only/-</h4>
      <h4>{resData.info.sla.deliveryTime} min takes</h4>
      <h4>{avgRating} star</h4>
    </div>
  );
};

export default ResturantCard;
