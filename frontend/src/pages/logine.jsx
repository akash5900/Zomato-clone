import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Logine = () => {
  const navigate = useNavigate();

  const [showPassword, setshowPassword] = useState(false);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/user/logine", {
        email,
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
      <form
        className=" w-100 h-110 flex flex-col justify-between px-4 border rounded mt-15 bg-gray-50 shadow-lg"
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
            type="text"
            value={email}
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^\+?[0-9\s-]{10,}$"
            placeholder="Enter Email"
            onChange={(e) => setemail(e.target.value)}
            className="border rounded p-3 w-full bg-white"
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Enter password"
              onChange={(e) => setpassword(e.target.value)}
              className="border rounded p-3 w-full bg-white"
            />
            <span
              className="absolute right-4 top-4 cursor-pointer"
              onClick={() => setshowPassword(!showPassword)}
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

        <section className="flex flex-col gap-3 px-2">
          <h1 className="flex justify-center">
            <span className="w-5 h-2 text-black"></span>or
            <span className="w-5 h-2 text-black"></span>
          </h1>
          <button
            type="button"
            className="border rounded flex flex-col items-center justify-center p-2 w-full bg-red-50 cursor-pointer bg-white"
            onClick={() => navigate("/login")}
          >
            Continue with PhnNumber
          </button>
        </section>

        <section className="flex gap-1 mb-2 px-2">
          <h1>New to Zomato?</h1>
          <button
            type="button"
            className="text-red-700 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Create account
          </button>
        </section>
      </form>
    </div>
  );
};

export default Logine;
