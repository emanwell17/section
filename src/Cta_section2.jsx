import React from "react";
import { Link } from "react-router";

export default function Cta_section2() {
  return (
    <main className="bg-gray-900 py-24 min-h-screen text-white ">
      <div className=" border mx-20 bg-gray-800 border-gray-700 rounded-3xl relative isolate overflow-hidden">
        <div className=" py-32 px-24 gap-x-20 ">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-left w-100">
            Boost your Productivity. Start using our app today
          </h1>
          
          <Link to="/">
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className=" px-3.5 py-2.5 font-semibold bg-indigo-700 hover:bg-indigo-600 border border-indigo-600 rounded-md hover:border-indigo-600"
            >
              Get started
            </a>
            <a href="" className="text-sm/6 font-semibold hover:text-gray-100">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          </Link>

        </div>
      </div>
    </main>
  );
}
