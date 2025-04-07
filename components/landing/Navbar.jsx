import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <nav className='p-4 bg-slate-800 text-white flex justify-between items-center flex-col sm:flex-row'> 
        <h1 className='text-xl font-bold'>  LinkSnap  </h1>
            <div>
                <Button className="text-white" variant="ghost">Login</Button>
                <Button className="ml-2">Sign Up</Button>
            </div>

     
    </nav>
  )
}

export default Navbar