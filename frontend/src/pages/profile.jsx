import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState(null);
  const [activeTab, setactiveTab] = useState("profile");

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
      }

      const res = await axios.get("http://localhost:3000/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });
      setuser(res.data.user);
    };
    getUser();
  }, [navigate]);
  return (
    <div>
      <section className=" h-25 bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-700">My Profile</h1>
      </section>

      <section className="flex justify-center gap-8 mt-10 ">
        <div className=" border border-gray-200 w-75 shadow-xl rounded-lg flex flex-col items-start gap-5 p-10 bg-white">
          <button
            className="border rounded-lg w-full p-2 hover:bg-yellow-200 cursor-pointer"
            onClick={() => setactiveTab("profile")}
          >
            Personal info
          </button>
          <button className="border rounded-lg w-full p-2 hover:bg-yellow-200 cursor-pointer">
            My Orders
          </button>
          <button className="border rounded-lg w-full p-2 hover:bg-yellow-200 cursor-pointer">
            Manage Address
          </button>
          <button
            className="border rounded-lg w-full p-2 hover:bg-yellow-200 cursor-pointer"
            onClick={() => navigate("/about")}
          >
            About
          </button>
          <button
            className=" border rounded-lg w-full p-2 hover:bg-red-400 cursor-pointer"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>

        <div className=" border border-gray-200 shadow-xl rounded-lg w-200">
          {activeTab === "profile" && user && (
            <div className=" text-lg px-20 py-5 flex flex-col gap-4">
              <section>
                <div className="flex items-center gap-2 md:gap-3 mb-5">
                  <img
                    src={`https://ui-avatars.com/api/?name=${user?.username}&background=ec4899&color=fff`}
                    className="w-15 h-15 rounded-full"
                    alt="profile"
                  />
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500">Hello,</p>
                    <p className="font-semibold">{user?.username}</p>
                  </div>
                </div>
              </section>

              <section className="flex items-center gap-3">
                <p>Username*: </p>
                <p className="w-full p-1">{user.username} </p>
              </section>

              <section className="flex items-center gap-3">
                <p>Email*: </p>
                <p className="w-full p-1">{user.email} </p>
              </section>

              <section className="flex items-center gap-3">
                <p>MobileNumber*: </p>
                <p className="w-full p-1">{user.mobileNumber} </p>
              </section>

              <button
                onClick={() => {
                  navigate("/");
                }}
                className="cursor-pointer border p-2 rounded-lg bg-gray-100 mt-5"
              >
                Home
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default Profile;
