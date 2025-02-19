import { useState } from "react";
import { onRegistrtaion } from "../api/auth";
import { NavLink, useNavigate } from "react-router-dom";

export const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await onRegistrtaion(values);

      setError("");
      console.log(data.message);
      setSuccess(data.message);
      navigate("/login");
      setValues({ name: "", email: "", password: "" });
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      setSuccess("");
    }
  };
  return (
    <div className="h-screen flex justify-center items-center px-4 bg-[#1A1A1A] ">
      <div className="rounded-2xl p-10 border-2 w-full max-w-md text-white">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
          <p className="font-light mb-6">
            Join CodeArena and challenge the best! 🚀 Register now to compete in
            real-time coding.
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              onChange={onChange}
              type="text"
              id="name"
              name="name"
              value={values.name}
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              onChange={onChange}
              type="email"
              id="email"
              name="email"
              value={values.email}
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="test@gmail.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              onChange={onChange}
              type="password"
              value={values.password}
              id="password"
              name="password"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm font-medium">{error}</div>
          )}
          {success && (
            <div className="text-green-500 text-sm font-medium">{success}</div>
          )}

          
          <NavLink to="/login" className="self-center p-4">
            <h1 className="font-medium underline cursor-pointer text-sm sm:text-base">
              Already have an account? Login 
            </h1>
          </NavLink>

          <button
            className="w-full text-black bg-[#cef241] font-medium py-2 px-4 rounded-md hover:bg-yellow-200 hover:border transition-all"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
