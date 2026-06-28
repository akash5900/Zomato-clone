import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [Formdata, setFormdata] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({
      ...Formdata,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { username, email, mobileNumber, password } = Formdata;

    if (!username || !email || !mobileNumber || !password) {
      alert("please fill all the fields");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Enter valid email");
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      alert("Enter valid mobile number");
      return false;
    }

    if (/^(\d)\1{9}$/.test(mobileNumber)) {
      alert("Invalid mobile number");
      return false;
    }

    if (/^(\d)\1{1,}$/.test(mobileNumber.slice(1))) {
      alert("Invalid mobile number");
      return false;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await axios.post("http://localhost:3000/api/user/signup", Formdata);
      alert("signup successfully");

      navigate("/login");
    } catch (error) {
      console.log("error");

      alert("signup failed");
    }
  };

  return (
    <div className=" flex items-center justify-center">
      <form className=" w-100 h-105 flex flex-col gap-8 border rounded px-4 pt-4 mt-15 shadow-lg bg-gray-50 ">
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl">Signup</h1>
          <MdCancel
            size={30}
            color="red"
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <section className="flex flex-col items-center gap-4">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="border p-2 rounded w-90 bg-white"
            value={Formdata.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="border p-2 rounded w-90 bg-white"
            value={Formdata.Email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="mobileNumber"
            placeholder="Enter MobileNumber"
            className="border p-2 rounded w-90 bg-white"
            value={Formdata.mobileNumber}
            onChange={handleChange}
          />

          <div className="relative ">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              className="border p-2 rounded w-90 bg-white"
              value={Formdata.password}
              onChange={handleChange}
            />
            <span
              className="absolute right-4 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="cursor-pointer border p-2 w-40 rounded bg-white"
            onClick={handleSignup}
          >
            Signup
          </button>
        </section>

        <section className="flex gap-1 ">
          <h1 className="">Already have an account?</h1>
          <button
            className=" text-red-700 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </section>
      </form>
    </div>
  );
};

export default Signup;
