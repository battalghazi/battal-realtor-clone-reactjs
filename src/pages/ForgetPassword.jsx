import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const ForgetPassword = () => {

  const [email, setEmail] = useState("");


  function onChange(e) {
   setEmail(e.target.value)
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://media.istockphoto.com/id/1351204753/tr/foto%C4%9Fraf/open-the-door-and-door-handle-with-a-key-and-a-keychain-shaped-house-property-investment.jpg?s=612x612&w=0&k=20&c=LuV9hZK-Yb87jFGP6onag8Hii1fOsVS0T34T7CsQHUk="
            alt="key"
            className="rounded-2xl w-full"
          ></img>
        </div>
        <div className="w-full md-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Adress"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't you have an account?{" "}
                <Link
                  to="/signin"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Sign in instead?
                </Link>
              </p>
              <p>
                <Link
                  to="/forgetpassword"
                  className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded-lg shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              send reset password
            </button>
            <div className="flex py-4 before:border-t before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;

 