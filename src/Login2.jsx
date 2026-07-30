import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Link } from "react-router";

function Login2() {
  return (
    <main className="bg-gray-900 min-h-screen text-white py-12 scheme-dark">
      <div className="flex justify-center mt-15">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="tailwind logo"
          className="h-10 w-auto"
        />
      </div>
      <div className="flex justify-center mt-10">
        <h1 className="font-bold text-2xl">Sign into your account</h1>
      </div>
      <div className="flex justify-center mt-10">
        <form action="#">
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-800 w-95 h-9 rounded-t-md border border-white/5 focus:outline-none focus:border-blue-500 p-4 text-sm text-gray-400"
            placeholder="Email Address"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-800 w-95 h-9 rounded-b-md border border-white/5 focus:outline-none focus:border-blue-500 p-4 text-sm text-gray-400"
            placeholder="Password"
          />
          <br />

          <div className="flex justify-between mt-5">
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                className="h-3 w-5 accent-blue-500 bg-gray-800"
              />
              <label htmlFor="" className="ml-3 text-sm text-gray-400">
                Remember me
              </label>
            </div>

            <div>
              <p className="text-blue-500">Forgot password?</p>
            </div>
          </div>

          <div className="mt-10">
            <input
              type="submit"
              value="sign in"
              className="border border-blue-500 bg-blue-500 w-full h-8 font-bold hover:bg-blue-400 rounded-md "
            />
          </div>
        </form>
      </div>

      <div>
        <p className="text-center text-sm text-gray-400 mt-10">
          Not a member?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-400">
            start a 14days free trial
          </a>
        </p>
      </div>
    </main>
  );
}

export default Login2;
