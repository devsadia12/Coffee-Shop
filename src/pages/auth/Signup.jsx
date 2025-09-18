import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from 'react-router';
import { auth } from "../../firebase.config";
import { DataContext } from "../../contextApi/contextApi";
import { createUserWithEmailAndPassword, updateCurrentUser, updateProfile } from "firebase/auth";


const Signup = () => {

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setUserData } = useContext(DataContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitData = (data) => {
    console.log("Form submitted with data:", data);

    const { fullName, email, password } = data;
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up:", user);

        if (user && user.uid) {
          updateProfile(auth.CurrentUser, {
          displayName: fullName,
        })
          .then(() => {
            console.log("User profile updated");
          
            setUserData(user);
            alert("Profile updated successfully");
            setLoading(false);
            navigate("/");
          })
          .catch((error) => {
            console.error("Error updating profile:", error.message);
            setLoading(false);
          });
        }
      })
      .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.error("Error during signup:", errorCode, errorMessage);
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
      <div className="w-full mt-12 mb-12 max-w-md bg-black shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit(submitData)}>
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name")}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>

          <div className="flex items-center gap-2 my-4">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-gray-400 text-sm">OR</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign Up with Google
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <NavLink to="/profile" className="text-blue-500 font-semibold hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;