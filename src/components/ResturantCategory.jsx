import { FaAngleDown } from "react-icons/fa6";
import CategoryItems from "./CategoryItems";

const ResturantCategory = ({ categoryData ,showIndex, setshowIndex}) => {

  const showAddButton = true

    const handleClick=()=>{
        setshowIndex()
    }
  return (
    <div>
      <div className="w-6/12 mx-auto my-2 p-4 shadow-lg bg-slate-50  cursor-pointer" onClick={handleClick}>
        <span className="font-bold font-sans" >
          {categoryData.title}{" "}
          <span className="font-medium text-gray-600">
            ({categoryData.itemCards.length})
          </span>
        </span>
        <span className="flex justify-end">
          <FaAngleDown />
        </span>
        {showIndex && <CategoryItems items={categoryData.itemCards} showAddButton={true}/>}
      </div>
    </div>
  );
};

export default ResturantCategory;
