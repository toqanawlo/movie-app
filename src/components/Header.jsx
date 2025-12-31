import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <div className='bg-primary flex justify-around font-primary gap-4 items-center w-full p-2 text-white'>
      <div>
<Link to="/" className='font-bold text-2xl text-center'>Movies</Link>
      </div>
      <div className='flex gap-8 text-lg items-center'>
        <Link to="/">WatchList </Link>
        <Link to="/watched">Watched </Link>
        <Link to="/add" className='p-2 bg-secondary rounded-lg' >ADD</Link>

      </div>
    </div>
  )
}

export default Header
