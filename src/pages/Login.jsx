import { useState } from "react";
import { onLogin } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { useNavigate } from "react-router-dom";

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
    <div className="h-screen bg-slate-800 flex justify-center items-center">
      <div className=" rounded-sm shadow-xl p-8 w-96">
        <h2 className="text-2xl font-bold text-white mb-6">Login</h2>
        <form onSubmit={onSubmit} className="grid">
          <label className="block text-sm font-medium text-white mb-2">
            Email
          </label>

          <input
            onChange={onChange}
            type="email"
            id="email"
            name="email"
            value={values.email}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 focus:ring-2 text-white mb-2"
            placeholder="test@gmail.com"
            required
          />

          <label className="block text-sm font-medium text-white mb-2">
            Password
          </label>
          <input
            onChange={onChange}
            type="password"
            value={values.password}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 focus:ring-2 text-white  mb-2"
            id="password"
            name="password"
            placeholder="password"
            required
          />
          <div className="text-red-500 text-sm my-2 font-medium">{error}</div>

          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
