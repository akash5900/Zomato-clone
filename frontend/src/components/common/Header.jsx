import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isloggedIn = token ? true : false;

  return (
    <div className="flex justify-between px-30">
      <div className="flex px-auto py-4 gap-8 ">
        <h1 className="text-4xl font-semibold pt-2 text-gray-700">Zomato</h1>

        <section className="border border-gray-200 rounded flex items-center gap-4 p-3 shadow-lg">
          <IoLocationSharp color="red" size={20} />

          <input
            type="text"
            placeholder="Locations"
            className="outline-none border-r border-gray-500 text-sm w-60"
          />

          <FaSearch color="skyblue" size={17} />

          <input
            type="text"
            placeholder="Search for restaurant, cuisine and dish"
            className="outline-none w-86 text-sm"
          />
        </section>
      </div>
      <section className="flex items-center gap-8 pt-2 text-lg text-gray-500 ">
        {isloggedIn ? (
          <>
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-red-500"
              onClick={() => navigate("/profile")}
            >
              <FaUser className="" color="blue" size={20} />
              <h1 className="text-md pt-1">Profile</h1>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-red-500">
              <FaCartShopping color="orange" size={23} />
              <h1 className="text-md pt-1" onClick={() => navigate("/cart")}>
                Cart
              </h1>
            </div>
          </>
        ) : (
          <>
            <button
              className="cursor-pointer hover:text-red-500"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
            <button
              className="cursor-pointer hover:text-red-500"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </>
        )}
      </section>
    </div>
  );
};

export default Header;
