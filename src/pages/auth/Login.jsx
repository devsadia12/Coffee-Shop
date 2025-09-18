import React, { useContext, useState } from "react";
import { NavLink, useNavigate, } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from "firebase/auth";
import { auth } from './../../firebase.config';
import { DataContext } from "../../contextApi/contextApi";
import { useForm } from "react-hook-form";

const Login = () => {

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setUserData } = useContext(DataContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitted = (data) => {
    console.log("Form submitted with data:", data);
    // You can add email/password login logic here if needed
  };

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  const googleLogin = () => {
    console.log("Google login clicked");
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("user signed in:", user);
        setUserData(user);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during signup:", error.code, error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-black shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit(submitted)}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
          >
            Login
          </button>
          <div className="flex items-center gap-2 my-4">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-gray-400 text-sm">OR</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <button
            type="button"
            className="w-full flex items-center cursor-pointer justify-center gap-2 border py-2 rounded-lg hover:bg-yellow-400 transition"
            onClick={googleLogin}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Login with Google
          </button>
        </form>
        <p className="text-sm text-center mt-6">
          Don’t have an account?{" "}
          <NavLink to="/register" className="text-blue-500 font-semibold hover:underline">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;