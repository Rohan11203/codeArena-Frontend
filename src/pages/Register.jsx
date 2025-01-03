import { useState } from "react"
import { onLogin, onRegistrtaion } from "../api/auth"

export const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await onRegistrtaion(values);

      setError('');
      console.log(data.message);
      setSuccess(data.message);
      setValues({name: '', email: '', password: ''})
      
    } catch (error) {
      console.log(error.response.data.Error);
      setError(error.response.data.Error[0]);
      setSuccess('');
    }
  }
  return (
      <div>
        <form onSubmit={onSubmit}>
          <input
          onChange={onChange}
          type="text"
          id="name"
          name="name"
          value={values.name}
          className="form-input"
          placeholder="John Doe"
          required
          />
          <input
          onChange={onChange}
          type="email"
          id="email"
          name="email"
          value={values.email}
          className="form-input"
          placeholder="test@gmail.com"
          required
          />

<input
              onChange={onChange}
              type="password"
              value={values.password}
              className="form-input"
              id="password"
              name="password"
              placeholder="password"
              required
            />
            <div className="text-red-500 text-sm mt-2 font-medium">{error}</div>
            <div className="text-green-500 text-sm mt-2 font-medium">{success}</div>

            <button type="submit">Submit</button>
        </form>
      </div>
    
  )
}