import { useState } from "react";
import { onRegistrtaion } from "../api/auth";

export const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

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
      setValues({ name: "", email: "", password: "" });
    } catch (error) {
      console.log(error.response.data.Error);
      setError(error.response.data.Error[0]);
      setSuccess("");
    }
  };
  return (
    <div className="h-screen bg-slate-800 flex justify-center items-center">
      <div className=" rounded-sm shadow-xl p-8 w-96">
        <h2 className="text-2xl font-bold text-white mb-6">Register</h2>
        <form onSubmit={onSubmit} className="grid">
          <label className="block text-sm font-medium text-white mb-2">
            Username
          </label>
          <input
            onChange={onChange}
            type="text"
            id="name"
            name="name"
            value={values.name}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 focus:ring-2 text-white mb-2"
            placeholder="Enter your name"
            required
          />

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
          <div className="text-red-500 text-sm mt-2 font-medium">{error}</div>
          <div className="text-green-500 text-sm my-4 mx-12 font-medium">
            {success}
          </div>

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
