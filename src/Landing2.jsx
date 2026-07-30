import React from "react";
import { Link } from "react-router";

export default function Landing2() {
  const backgroundImage =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply";

  return (
    <main
      className="relative min-h-screen bg-gray-900 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >

      <div className="relative z-10">
        <section className="flex items-center justify-between p-10">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            alt="Tailwind logo"
            className="h-auto w-10"
          />

          <nav className="flex items-center">
            <Link to="/product" className="mx-5 hover:text-indigo-400">
              Product
            </Link>

            <Link to="/features" className="mx-5 hover:text-indigo-400">
              Features
            </Link>

            <Link to="/marketplace" className="mx-5 hover:text-indigo-400">
              Marketplace
            </Link>

            <Link to="/company" className="mx-5 hover:text-indigo-400">
              Company
            </Link>
          </nav>

          <Link to="/login" className="hover:text-indigo-400">
            Log in →
          </Link>
        </section>

        <div className="mt-50 mb-8 flex justify-center">
          <div className="flex rounded-full px-5 py-1 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            <span>Announcing our next round of funding.</span>

            <Link
              to="/funding"
              className="ml-2 flex text-indigo-400 hover:text-indigo-300"
            >
              Read more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h1 className="mx-auto max-w-2xl text-5xl font-semibold tracking-tight text-balance">
            Data to enrich your online business
          </h1>

          <p className="mx-auto mt-10 max-w-2xl font-bold text-gray-400">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
        </div>

        <div className="mt-5 flex items-center justify-center gap-5">
          <Link
            to="/landing1"
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold hover:bg-blue-400"
          >
            Get Started
          </Link>

          <Link
            to="/landing2"
            className="p-2 font-semibold hover:text-indigo-400"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </main>
  );
}
