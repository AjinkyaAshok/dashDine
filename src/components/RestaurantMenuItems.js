import { useDispatch } from "react-redux";
import { RES_ITEMS_IMAGE } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useLocation } from "react-router-dom";

const RestaurantMenuItems = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const location = useLocation();
  return (
    <div>
      {items.map((item,index) => (
        <div
          className="flex border mb-2 shadow-sm flex-row justify-between"
            key={`${item?.card?.info?.id}-${index}`}
        >
          <div className="flex flex-col p-4">
            <div className="font-semibold mb-4">
              <p>{item?.card?.info?.name}</p>
              <p> Rs.{item?.card?.info?.price / 100}</p>
            </div>
            <p className="w-2/3 text-justify">
              {item?.card?.info?.description + ".."}
            </p>
          </div>

          <div className="flex w-40 h-40 flex-col justify-center items-center space-y-2">
            <div className="">
              {/* <img
                className="w-min rounded-lg h-20"
                src={RES_ITEMS_IMAGE + item?.card?.info?.imageId}
                alt=""
              /> */}
            </div>
            <div>
              {location.pathname === "/cart" ? (
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="p-1 mx-1 font- border shadow-sm rounded-md bg-white hover:bg-gray-50"
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={() => handleAddItem(item)}
                  className="p-1 mx-1 font- border shadow-sm rounded-md bg-white hover:bg-gray-50"
                >
                  ADD
                </button>
              )}
            </div>
          </div>
       
        </div>
        
      ))}
    </div>
  );
};

export const ItemsClearButton = (RestaurantMenuItems) => {
  return (props) => {
    return (
      <div>
        <RestaurantMenuItems {...props} />
        {/* <button className="p-4 bg-orange-400 rounded-md">Remove</button> */}
      </div>
    );
  };
};

export default RestaurantMenuItems;
