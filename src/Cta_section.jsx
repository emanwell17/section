import React from "react";

export default function Cta_section() {
  return (
    <main className="bg-gray-900 py-24 min-h-screen text-white ">
      <div className=" border mx-20 bg-gray-800 border-gray-700 rounded-3xl relative isolate overflow-hidden">
        <svg viewBox="0 0 1024 1024" aria-hidden="true" class="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
        <circle r="512" cx="512" cy="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"></circle>
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6"></stop>
            <stop offset="1" stop-color="#E935C1"></stop>
          </radialGradient>
        </defs>
      </svg>
        <div className=" py-32 px-24 gap-x-20 ">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-left w-100">
            Boost your Productivity. Start using our app today
          </h1>
          <p className="mt-6 text-gray-300 text-lg/8 w-110">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla.
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <a href="#" className=" px-3.5 py-2.5 font-semibold bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-md hover:border-gray-600">Get started</a>
            <a href="" className="text-sm/6 font-semibold hover:text-gray-100">Learn more <span aria-hidden="true">→</span></a>
          </div>
          
        </div>
        <div className=" mt-8 ">
          <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png" alt="" className="absolute left-170 top-15 w-228 rounded-md max-w-none"/>
        </div>
      </div>
    </main>
  );
}
