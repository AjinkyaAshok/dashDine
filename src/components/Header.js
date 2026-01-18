import { useContext, useState } from "react";
import { LOGO, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import DashDineLogo from "../../public/images/dashdine.png";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Sign In");
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-around shadow-lg">
      <div className="logo-container">
        {/* <img className="size-24" src={DashDineLogo} alt="logo" /> */}
        <div>
          <h1 className="p-5 text-lg font-semibold text-black leading-tight tracking-wide">
            Dash
            <br />
            <span className="font-bold">Dine</span>
          </h1>
        </div>
      </div>

      <div className="flex items-center">
        <ul className="flex text-xl ">
          {/* <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"}</li> */}
          <Link to="/">
            <li className="px-4 hover:text-orange-300">Home</li>
          </Link>
          <Link to="/offers">
            <li className="px-4 hover:text-orange-300">Offers</li>
          </Link>
          <Link to="/contact">
            <li className="px-4 hover:text-orange-300">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="px-4 hover:text-orange-300">
              Cart ({cartItems.length})
            </li>
          </Link>
          {/* <Link to="/grocery">
            <li className="px-4">Grocery</li>
          </Link> */}

          <button
            className="px-4 hover:text-orange-300"
            onClick={() => {
              loginButton === "Sign In"
                ? setLoginButton("Sign In")
                : setLoginButton("Sign In");
            }}
          >
            {loginButton}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
