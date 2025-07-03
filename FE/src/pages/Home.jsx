import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
<div className='flex justify-center items-center gap-10'>
    <h1>Home</h1>
    <button onClick={()=> navigate('/Signin')} className='w-25 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
      Sign In
    </button>
    <button onClick={()=>navigate('/Signup')} className='w-25 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
      Sign up
    </button>
</div>    
  )
}

export default Home