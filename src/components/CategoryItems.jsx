import { CDN_URL } from "./utils/contants";

const CategoryItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="border-b-2 pb-6 text-left pt-3">
          <div className="flex justify-between">
            <div className="w-9/12 py-3">
              <span className="pl-5 font-bold">{item.card.info.name} - </span>
              <span className="pl-5">Rs. {item.card.info.price / 100}</span>
              <p className="pl-5 pt-2 text-xs text-gray-400">
                {item.card.info.description}
              </p>
            </div>
            <div className="flex justify-end absolute">
              <button className="p-2 ml-[620px] mt-[76px] bg-slate-50 rounded-lg shadow-xl mx-10 w-18 h-18 hover:scale-90 hover:ease-in duration-500 ">
                ADD +
              </button>
            </div>
            <img
              className="w-20 rounded-lg border border-gray-800 hover:shadow-2xl mb-12 mr-10"
              src={CDN_URL + item.card.info.imageId}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItems;
