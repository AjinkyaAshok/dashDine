import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { ShimmerResInfo } from "./Shimmer";
import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantInfo = () => {
  const { resID } = useParams();

  // ✅ CORRECT hook usage
  const { resInfo, loading, error } = useRestaurantMenu(resID);

  const [showIndex, setShowIndex] = useState(null);

  // ✅ Hard safety guards (NO CRASH POSSIBLE)
  if (loading || !resInfo || !Array.isArray(resInfo.cards)) {
    return <ShimmerResInfo />;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        Failed to load restaurant menu
      </div>
    );
  }

  // ===============================
  // 🧠 Get Restaurant Info (SAFE)
  // ===============================
  const restaurantInfoCard = resInfo.cards.find(
    (card) =>
      card?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );

  const restaurantInfo = restaurantInfoCard?.card?.card?.info;

  if (!restaurantInfo) {
    return <ShimmerResInfo />;
  }

  const { name, cuisines, costForTwo } = restaurantInfo;

  // ===============================
  // 🧠 Get Menu Categories (SAFE)
  // ===============================
  const groupedCard = resInfo.cards.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  );

  const regularCards =
    groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = regularCards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );

  // ===============================
  // 🎨 UI
  // ===============================
  return (
    <div className="w-6/12 mx-auto">
      {/* Restaurant Header */}
      <div className="my-6 p-4 flex flex-col bg-white shadow-md">
        <h1 className="text-sm font-bold">{name}</h1>
        <h3 className="text-sm font-normal">
          {cuisines?.join(", ")}
        </h3>
        <h3 className="text-sm font-normal">
          ₹{costForTwo ? costForTwo / 100 : "N/A"} for two
        </h3>
      </div>

      {/* Menu Categories */}
      <div>
        {categories.map((category, index) => (
          <RestaurantItemCategory
            key={category?.card?.card?.title || index}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantInfo;
