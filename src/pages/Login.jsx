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
  const [error, setError] = useState(false);
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
    <div className="h-screen w-full">
      <div className="flex h-full w-full">
        <div className="w-1/2 flex items-center justify-center">
          <img className="h-full w-full object-cover" src={SignInImage} />
        </div>

        <div className="w-1/2 p-6">
          <NavLink to={"/register"} className="flex justify-end p-6">
            <h1 className="font-medium underline cursor-pointer">
              Don't have an account signIn
            </h1>
          </NavLink>

          <div className="max-w-4xl grid gap-8 justify-center mt-16 mx-auto">
            <div className="">
              <h1 className="font-semibold text-2xl pl-2">Sign in</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 ">
              <div className="w-96 p-2 rounded-2xl flex items-center justify-center gap-2 border-2 border-gray-200 cursor-pointer hover:bg-gray-100 ">
                <div ><TwitterIcon fill="#12c9e6" /></div>
                <div>Continue with Twitter</div>
              </div>
              <div className="w-96 p-2 rounded-2xl flex justify-center gap-2 border-2 border-gray-200 cursor-pointer hover:bg-gray-100">
                <div><Goal /></div>
                <div>Continue with Google</div>
              </div>
            </div>
            <div className="flex gap-2 font-semibold">
              <div className="pl-2 ">--------------------------- OR</div>
              <div>----------------------------</div>
            </div>

            <div className="grid gap-2">
              <p className="font-medium">User name or email address</p>
              <input
                type="text"
                placeholder="Enter text"
                className="w-96 border border-gray-300 rounded-lg  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="font-medium">Your Password</p>
              <input
                type="password"
                placeholder="Enter text"
                className="w-96 border border-gray-300 rounded-lg  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="transition-all duration-300 hover:bg-gray-200 cursor-pointer p-4 w-1/2 bg-gray-400 rounded-3xl text-center">
              Sign In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
