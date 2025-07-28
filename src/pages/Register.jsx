import { useState } from "react";
import { OnGoogle, onRegistrtaion } from "../api/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Circle, Chrome } from "lucide-react";
import { Navbar } from "../components/Navbar";

export const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await onRegistrtaion(values);
      setError("");
      setSuccess(data.message + ". Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setError(
        error.response?.data?.message || "An unexpected error occurred."
      );
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  const onGoogleLogin = () => {
    // This is a placeholder for the actual Google login flow
    localStorage.setItem("isAuth", "true");
    OnGoogle();
  };

  return (
    <div className="bg-[#0A0A0A]">
    <Navbar />
      <div className="min-h-screen  text-white w-full flex items-center justify-center p-4 font-sans">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8 shadow-2xl shadow-yellow-400/10">
            <div className="text-center mb-8">
              <NavLink
                to="/"
                className="inline-flex items-center gap-2 text-2xl font-bold"
              >
                <Circle fill="#cef241" className="text-[#cef241]" />
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  CodeArena
                </span>
              </NavLink>
              <p className="text-gray-400 mt-2">
                Join today and start your coding journey.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={onGoogleLogin}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#1C1C1C] hover:bg-gray-800 border border-gray-700 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <Chrome size={20} />
                <span className="font-semibold">Continue with Google</span>
              </button>

              <div className="flex items-center text-gray-500">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="mx-4 text-xs uppercase">Or</span>
                <div className="flex-grow border-t border-gray-700"></div>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label
                    className="text-sm font-medium text-gray-400"
                    htmlFor="name"
                  >
                    Username
                  </label>
                  <input
                    id="name"
                    onChange={onChange}
                    name="name"
                    value={values.name}
                    type="text"
                    placeholder="Your username"
                    className="w-full mt-1 bg-[#0A0A0A] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  />
                </div>

                <div>
                  <label
                    className="text-sm font-medium text-gray-400"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    onChange={onChange}
                    name="email"
                    value={values.email}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full mt-1 bg-[#0A0A0A] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  />
                </div>

                <div>
                  <label
                    className="text-sm font-medium text-gray-400"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    onChange={onChange}
                    name="password"
                    value={values.password}
                    type="password"
                    placeholder="••••••••"
                    className="w-full mt-1 bg-[#0A0A0A] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}
                {success && (
                  <p className="text-green-400 text-sm text-center">
                    {success}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-black bg-[#cef241] font-semibold py-3 px-4 rounded-lg hover:bg-yellow-300 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>
            </div>

            <p className="text-center text-sm text-gray-400 mt-8">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="font-medium text-yellow-400 hover:underline"
              >
                Log In
              </NavLink>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
