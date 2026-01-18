import RestrauntCard, { withOfferLabel } from "./RestrauntCard";
import { useState, useEffect, useContext, useRef } from "react";
// import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import { RES_ITEMS_IMAGE, RES_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
// import Shimmerr from "./Shimmerr";

import { Shimmer, Shimmerr } from "./Shimmer";
import ErrorPage from "./ErrorPage";

const Body = () => {
  const [listofRestraunts, setListofRestraunt] = useState([]);
  const [filteredRestraunts, setFilteredRestraunt] = useState([]);
  const [carousalList, setCarousalList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantOfferCard = withOfferLabel(RestrauntCard);

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (scrollAmount) => {
    const container = scrollContainerRef.current;
    if (container) {
      const newScrollPosition = scrollPosition + scrollAmount;
      container.scrollLeft = newScrollPosition;
      setScrollPosition(newScrollPosition);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    const json = await data.json();

    setListofRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setCarousalList(
     json?.data?.cards[0]?.card?.card?.imageGridCards?.info
    );
    
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <ErrorPage />;

  return (
    <div className="h-full mt-10 w-10/12 mx-auto">
      <div className="flex justify-between">
        <button
          className="px-1 text-sm font- border shadow-sm rounded-md bg-white hover:bg-gray-50"
          onClick={() => {
            const filteredList = listofRestraunts.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestraunt(filteredList);
          }}
        >
          Top Rated
        </button>

        <div className="search-container">
          <input
            className="border focus:outline-none rounded-md p-1"
            data-testid="searchInput"
            type="text"
            placeholder="search for favourite"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="p-1 mx-1 font- border shadow-sm rounded-md bg-white hover:bg-gray-50"
            onClick={() => {
              const filter = listofRestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestraunt(filter);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="mt-10 mx-6 flex">
        <div className="flex-1">
          <h1 className="font-bold text-2xl mt10">What's on your mind?</h1>
        </div>
        <button
          className="px-2 py-2 mx-3 bg-gray-200 text-white rounded-full"
          onClick={() => handleScroll(-900)}
        >
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            aria-hidden="true"
            strokecolor="rgba(2, 6, 12, 0.92)"
            fillcolor="rgba(2, 6, 12, 0.92)"
          >
            <path
              d="M7.46869 3.43394C7.79171 3.13249 8.29794 3.14998 8.59939 3.473C8.90083 3.79602 8.88334 4.30225 8.56033 4.60369L5.0839 7.84795C4.94511 7.97748 4.82252 8.0921 4.71414 8.19502L15.0937 8.19502C15.5355 8.19502 15.8937 8.5532 15.8937 8.99502C15.8937 9.43685 15.5355 9.79502 15.0937 9.79502L4.6665 9.79502C4.78625 9.90939 4.92436 10.0386 5.08389 10.1875L8.51791 13.3922C8.84092 13.6937 8.8584 14.1999 8.55695 14.5229C8.2555 14.8459 7.74927 14.8634 7.42626 14.5619L3.95463 11.3221C3.54648 10.9413 3.18179 10.601 2.92647 10.2871C2.64873 9.94573 2.41671 9.53755 2.41672 9.01769C2.41672 8.49783 2.64874 8.08965 2.92648 7.74824C3.18181 7.43439 3.54649 7.09412 3.95465 6.7133L7.46869 3.43394Z"
              fill="#02060C"
              fillOpacity="0.92"
            ></path>
          </svg>
        </button>
        <button
          className="px-2 py-2 bg-gray-200 text-white rounded-full"
          onClick={() => handleScroll(900)}
        >
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            aria-hidden="true"
            strokecolor="rgba(2, 6, 12, 0.92)"
            fillcolor="rgba(2, 6, 12, 0.92)"
          >
            <path
              d="M10.5164 3.43418C10.1934 3.13273 9.68714 3.15022 9.3857 3.47324C9.08425 3.79626 9.10174 4.30249 9.42476 4.60394L12.9012 7.84819C13.04 7.97772 13.1626 8.09234 13.2709 8.19527L2.89142 8.19527C2.44959 8.19527 2.09142 8.55344 2.09142 8.99527C2.09142 9.4371 2.44959 9.79527 2.89142 9.79527L13.3186 9.79527C13.1988 9.90964 13.0607 10.0388 12.9012 10.1877L9.46718 13.3924C9.14416 13.6939 9.12668 14.2001 9.42813 14.5231C9.72958 14.8462 10.2358 14.8636 10.5588 14.5622L14.0304 11.3224C14.4386 10.9415 14.8033 10.6012 15.0586 10.2874C15.3364 9.94598 15.5684 9.5378 15.5684 9.01793C15.5684 8.49807 15.3363 8.08989 15.0586 7.74849C14.8033 7.43463 14.4386 7.09437 14.0304 6.71354L10.5164 3.43418Z"
              fill="#02060C"
              fillOpacity="0.92"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className="m-2 flex overflow-x-auto space-x-4 no-scrollbar scroll-smooth"
        ref={scrollContainerRef}
      >
        {carousalList.length > 0
          ? carousalList.map((card, index) => (
              <img
                key={index}
                className="w-64 h-40 object-cover"
                src={RES_ITEMS_IMAGE + card.imageId}
                alt={`Image ${index}`}
              />
            ))
          : Array.from({ length: 9 }).map((_, index) => (
              <Shimmerr key={index} />
            ))}
      </div>
      <div className="mx-10">
        <hr className="w-full h-px mx-auto bg-slate-100 border-0 my-10" />
        <h1 className="font-bold text-2xl mt-10">
          Top restaurant chains from Mumbai
        </h1>
      </div>

      <div className="flex flex-wrap justify-evenly mt-4">
        {filteredRestraunts.length > 0
          ? filteredRestraunts.map((restraunt) => (
              <Link
                key={restraunt.info.id}
                to={"/restaurant/" + restraunt.info.id}
              >
                {restraunt.info.isOpen ? (
                  <RestaurantOfferCard resData={restraunt} />
                ) : (
                  <RestrauntCard resData={restraunt} />
                )}
              </Link>
            ))
          : Array.from({ length: 8 }).map((_, index) => (
              <Shimmer key={index} />
            ))}
      </div>
    </div>
  );
};

export default Body;
