import { useState } from "react";
import { onLogin } from "../api/auth";
import { useStore } from "../ContextAPi/store/ContextProvide";
import { Navigate, useNavigate } from "react-router-dom";

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
      navigate("/dashboard")
    } catch (error) {
      console.log(error.response.data.Error);
      setError(error.response.data.message);
    }
  };
  return (
    <div>
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="email"
        id="email"
        name="email"
        value={values.email}
        placeholder="test@gmail.com"
        required
      />

      <input
        onChange={onChange}
        type="password"
        value={values.password}
        id="password"
        name="password"
        placeholder="password"
        required
      />
      
      <div className="error-message">{error}</div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};
