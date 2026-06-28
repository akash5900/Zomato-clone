import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);

  const [mobileNumber, setmobileNumber] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/user/login", {
        mobileNumber,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("login successfully");
      console.log(res.data);

      navigate("/");
    } catch (error) {
      console.log(error);

      alert(" login failed");
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="border rounded h-110 flex flex-col  justify-between mt-15 shadow-lg bg-gray-50">
        <form
          className=" w-100 flex flex-col px-4 gap-8"
          onSubmit={handleLogin}
        >
          <section className="flex justify-between mt-3 px-1">
            <h1 className="text-3xl">Login</h1>
            <MdCancel
              size={30}
              color="red"
              className="cursor-pointer"
              onClick={() => navigate("/")}
            />
          </section>

          <section className="flex flex-col items-center gap-6 px-2">
            <input
              type="tel"
              placeholder="Enter phone number"
              className="border rounded p-3 w-full bg-white"
              value={mobileNumber}
              onChange={(e) => {
                setmobileNumber(e.target.value);
              }}
            />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="border rounded p-3 w-full bg-white"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <span
                className="absolute cursor-pointer right-3 top-4"
                onClick={() => {
                  setshowPassword(!showPassword);
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              type="submit"
              className=" border rounded p-3 cursor-pointer w-50 bg-white"
            >
              Login
            </button>
          </section>
        </form>

        <section className=" w-100 flex flex-col gap-3 px-6">
          <h1 className="flex justify-center">
            <span className="w-5 h-2 text-black"></span>or
            <span className="w-5 h-2 text-black"></span>
          </h1>
          <button
            className="border rounded flex flex-col items-center justify-center p-2 w-full bg-red-50 cursor-pointer bg-white"
            onClick={() => navigate("/elogin")}
          >
            Continue with email
          </button>
        </section>

        <section className="flex gap-1 mb-2 px-6">
          <h1>New to Zomato?</h1>
          <button
            className="text-red-700 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Create account
          </button>
        </section>
      </div>
    </div>
  );
};

export default Login;
