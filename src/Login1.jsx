import React from "react";
import { Link } from "react-router";

export default function Login1() {
  return (
    <section className="bg-gray-900 min-h-screen px-20 py-12 text-white">
      <div className="mt-30">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="tailwind logo"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="text-white text-2xl mt-10 text-center font-bold">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 mx-auto sm:mx-auto sm:max-w-sm">
        <form>
          <div className="">
            <label htmlFor="email" className="font-bold">
              Email Address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name=""
                id=""
                className=" w-full border-2 border-gray-700 rounded-md h-9 focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-between font-bold">
              <label htmlFor="password">Passwod</label>
              <a href="#" className="text-blue-500">
                Forgot password?
              </a>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                className="bg-white/5 w-full border-2 border-gray-700 rounded-md h-9 focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-10">
            <input
              type="submit"
              value="sign in"
              className="border border-blue-500 bg-blue-700 w-full p-2 hover:bg-blue-600 rounded-xl "
            />
          </div>
        </form>

        <div>
          <p className="text-center text-sm mt-10">
            Not a member?{" "}
            <Link to="/login2" className="text-blue-500 hover:text-blue-400">
              start a 14days free trial
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
