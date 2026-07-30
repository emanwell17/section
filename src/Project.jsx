import React from 'react'
import { Link } from 'react-router'
import Login1 from './Login1'

export default function Cta() {
  return (
    <main className='min-h-screen py-1 bg-gray-900 text-white'>
        <div className='text-center mt-30 '>
        <h1 className='text-5xl font-bold'>class Project</h1>
        </div>
        <ul className='text-center mt-10 mx-auto w-100 text-black text-2xl'>
          <Link to="/login1">
          <li className='border border-white/10 bg-white mb-5 p-2 rounded-xl hover:bg-white/10 hover:text-white'>Login page</li>
          </Link>
          <Link to="/landing">
          <li className='border border-white/10 bg-white mb-5 p-2 rounded-xl hover:bg-white/10 hover:text-white'>Landing page</li>
          </Link>
          <Link to="/cta-section">
          <li className='border border-white/10 bg-white mb-5 p-2 rounded-xl hover:bg-white/10 hover:text-white'>Cta section</li>
          </Link>
        </ul>
    </main>
  )
}
