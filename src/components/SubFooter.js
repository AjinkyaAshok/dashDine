import React from "react";

const SubFooter = () => {
  return (
    <footer className="mt-20 bg-[#f0f0f5] relative bottom-0">
      <div className="flex gap-x-4 items-center mx-auto w-6/12 h-24">
        <h1 className="grow text-2xl font-bold text-[#3D4047]">
          For better experience,download the Swiggy app now
        </h1>
        <div className="flex gap-x-6">
          <img
            className="w-48 h-16"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            }
            alt=""
          />
          <img
            className="w-48 h-16"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            }
            alt=""
          />
        </div>
      </div>

      <div className="bg-black text-gray-400">
        <ul className="flex gap-x-20 justify-center p-10 text-lg">
          <ul className="flex flex-col gap-y-2">
            <div className="flex">
              <svg
                className="size-9 "
                height="2500"
                viewBox="-7.3 3.6 2520.1 3702.8"
                width="1708"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1255.2 3706.3c-2.4-1.7-5-4-7.8-6.3-44.6-55.3-320.5-400.9-601.6-844.2-84.4-141.2-139.1-251.4-128.5-279.9 27.5-74.1 517.6-114.7 668.5-47.5 45.9 20.4 44.7 47.3 44.7 63.1 0 67.8-3.3 249.8-3.3 249.8 0 37.6 30.5 68.1 68.2 68 37.7 0 68.1-30.7 68-68.4l-.7-453.3h-.1c0-39.4-43-49.2-51-50.8-78.8-.5-238.7-.9-410.5-.9-379 0-463.8 15.6-528-26.6-139.5-91.2-367.6-706-372.9-1052-7.5-488 281.5-910.5 688.7-1119.8 170-85.6 362-133.9 565-133.9 644.4 0 1175.2 486.4 1245.8 1112.3 0 .5 0 1.2.1 1.7 13 151.3-820.9 183.4-985.8 139.4-25.3-6.7-31.7-32.7-31.7-43.8-.1-115-.9-438.8-.9-438.8-.1-37.7-30.7-68.1-68.4-68.1-37.6 0-68.1 30.7-68.1 68.4l1.5 596.4c1.2 37.6 32.7 47.7 41.4 49.5 93.8 0 313.1-.1 517.4-.1 276.1 0 392.1 32 469.3 90.7 51.3 39.1 71.1 114 53.8 211.4-154.9 866-1135.9 1939.1-1172.8 1983.8z"
                  fill="#ffff"
                />
              </svg>
              <li className="font-bold text-3xl text-white">Swiggy IN</li>
            </div>

            <li className="text-gray-400">
              © 2023 Bundl Technologies Pvt. Ltd
            </li>
          </ul>
          <ul className="flex flex-col gap-y-2">
            <li className="text-white font-bold">Company</li>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Genie</li>
          </ul>
          <div className="flex flex-col gap-y-6">
            <ul className="flex flex-col gap-y-2">
              <li className="text-white font-bold">Contact us</li>
              <li>Help and Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
            <ul className="flex flex-col gap-y-2">
              <li className="text-white font-bold">Legal</li>
              <li>Terms and Conditions</li>
              <li>Cookie policy</li>
              <li>Pivacy policy</li>
            </ul>
          </div>
          <ul className="flex flex-col gap-y-2">
            <li className="text-white font-bold">We Deliver to:</li>
            <li>Banglore</li>
            <li>Delhi</li>
            <li>Pune</li>
            <li>Mumbai</li>
            <select className="bg-black border rounded">
              <option value="volvo">592 cities</option>
              <option value="saab">Kolkata</option>
              <option value="mercedes">Chennai</option>
              <option value="audi">Akola</option>
            </select>
          </ul>
        </ul>
      </div>
    </footer>
  );
};

export default SubFooter;
