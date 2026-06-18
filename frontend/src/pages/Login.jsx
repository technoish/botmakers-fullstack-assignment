import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-[#121212] border border-zinc-800 rounded-xl p-8 w-full max-w-md"
      >
        <h1 className="text-4xl text-white mb-8 text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 bg-zinc-900 border border-zinc-700 rounded text-white"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 bg-zinc-900 border border-zinc-700 rounded text-white"
        />

        <button
          type="submit"
          className="w-full bg-[#FF4C4C] hover:bg-red-600 py-3 rounded text-white"
        >
          LOGIN
        </button>

        <p className="text-zinc-400 mt-6 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#FF4C4C]"
          >
            Sign Up
          </Link>
        </p>
      </form>

    </div>
  );
}

export default Login;