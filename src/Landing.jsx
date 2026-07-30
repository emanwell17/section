import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function Landing() {
  return (
    <main className="bg-gray-900 min-h-screen text-white">
      <section className="flex justify-between p-10">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="tailwind logo"
          className="w-10 h-auto"
        />

        <nav className="">
          <a href="" className="mx-5">
            Product
          </a>
          <a href="" className="mx-5">
            Feature
          </a>
          <a href="" className="mx-5">
            Marketplace
          </a>
          <a href="" className="mx-5">
            Company
          </a>
        </nav>
          <a href="">
            Log in →
          </a>
      </section>

      <div className="flex justify-center mt-50 mb-8">
        <p className="px-5 p-1 rounded-full text-gray-400 flex ring-1 ring-white/10 hover:ring-white/20">
          Announcing our next round of funding.{" "}
          <a href="" className="text-indigo-400 flex ml-2">
            Read more <span aria-hidden="true">→</span>
          </a>
        </p>
      </div>

      <div className="text-center">
        <h1 className="text-5xl font-semibold text-balance tracking-tight w-100 mx-auto ">
          Data to enrich your online business
        </h1>

        <p className="text-gray-400 font-bold mt-10 w-150 mx-auto">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>
      </div>

      <Link to="/landing2" className="page-card" >
      <div className="flex justify-center mt-5">
        <button className="bg-blue-500 p-2 rounded-md px-3.5 py-2.5 text-sm font-semibold hover:bg-blue-400">Get Started</button>
        <p className="ml-5 p-2 flex hover:text-indigo-400">Learn More → </p>
      </div>
      </Link>
      
    </main>
  );
}
