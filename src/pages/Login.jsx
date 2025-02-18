import { useState } from "react";
import { onLogin } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { NavLink, useNavigate } from "react-router-dom";
import SignInImage from "../assets/signinImage.png";
import { Goal, TwitterIcon } from "lucide-react";

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { isAuth, setIsAuth } = useStore();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await onLogin(values);

      setIsAuth(true);
      localStorage.setItem("isAuth", "true");
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response.data.Error);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="">
      <div className="h-screen bg-[#1A1A1A] text-white w-full flex justify-center  md:flex-row">
        

        <div className="w-full  md:w-1/2 p-6 flex flex-col items-center">
          

          <div className="w-full border p-8 rounded-xl max-w-md sm:max-w-lg grid gap-6 mt-8 sm:mt-16 px-4">
            <h1 className="font-semibold text-2xl text-center">Login In</h1>

            <div className="flex flex-col items-center gap-3">
              
              <div className="w-full max-w-md p-2 rounded-2xl flex items-center justify-center gap-2 border-2 border-gray-200 cursor-pointer hover:bg-gray-800">
                <Goal />
                <span>Continue with Google</span>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2 font-semibold text-sm sm:text-base">
              <div className="flex-1 border-t border-gray-300"></div>
              <span>OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <div className="grid gap-3">
              <label className="font-medium">Username or Email Address</label>
              <input
                onChange={onChange}
                name="email"
                value={values.email}
                type="text"
                placeholder="Enter your email or username"
                className="w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <label className="font-medium">Password</label>
              <input
                onChange={onChange}
                name="password"
                value={values.password}
                type="password"
                placeholder="Enter your password"
                className="w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            {error && (
              <div className="font-medium text-red-400 text-center lg:text-start">
                {error}
              </div>
            )}
            <NavLink to="/register" className="self-end p-4">
            <h1 className="font-medium underline cursor-pointer text-sm sm:text-base">
              Don't have an account? Sign Up
            </h1>
          </NavLink>
            <button
              onClick={onSubmit}
              className="w-full max-w-xs text-black bg-[#cef241] font-semibold p-3 rounded-3xl hover:border hover:bg-white  transition-all"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
