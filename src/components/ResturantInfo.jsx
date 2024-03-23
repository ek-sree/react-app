import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useResturantMenu from "../customHooks/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

function ResturantInfo() {
  const [showIndex, setshowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

  if (resInfo.length === 0) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.data?.cards[0]?.card?.card?.info || {};
  // const itemCards =
  //   resInfo?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
  //     ?.card?.card?.itemCards || [];

  const category =
    resInfo?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">{name}</h1>
      <h2>{cuisines}</h2>
      <h2>{costForTwoMessage}</h2>
      {category.map((cat, index) => (
        <ResturantCategory
          key={index}
          categoryData={cat?.card?.card}
          showIndex={index === showIndex ? true : false}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
    </div>
  );
}

export default ResturantInfo;
