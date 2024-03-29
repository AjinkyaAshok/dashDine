import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuItems, { ItemsClearButton } from "./RestaurantMenuItems";
import { clearCart } from "../utils/cartSlice";
import { EMPTY_CART } from "../utils/constants";

const CartPage = () => {
  const CartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = (store) => {
    dispatch(clearCart());
  };
  const RestaurantMenuItemsWithClearButton =
    ItemsClearButton(RestaurantMenuItems);

  return (
    <div className="flex justify-around">
      <div className="w-7/12 p-5 border mt-10 rounded-md">
        <div className="flex justify-between mb-3">
          <h1 className="font-bold text-2xl">CHECKOUT</h1>
          <button
            onClick={handleClearCart}
            className="p-1 mx-1 font- border shadow-sm rounded-md bg-white hover:bg-gray-50"
          >
            Clear All
          </button>
        </div>

        <div className="">
          {CartItems.length === 0 ? (
            <img
              key={CartItems?.index}
              className="mx-auto size-72"
              src={EMPTY_CART}
              alt=""
            />
          ) : (
            <RestaurantMenuItemsWithClearButton
              key={CartItems?.index}
              items={CartItems}
            />
          )}
        </div>
      </div>

      <div className="w-4/12 p-5 border mt-10 rounded-md">
        <div className="flex justify-between mb-3">
          <h1 className="font-bold text-2xl">PAYMENT</h1>
          <button
            onClick={handleClearCart}
            className="p-1 mx-1 font- border shadow-sm rounded-md bg-white hover:bg-gray-50"
          >
            Clear All
          </button>
        </div>

        {/* <h1>Total Amount:{CartItems.length}</h1> */}
      </div>
    </div>
  );
};

export default CartPage;
