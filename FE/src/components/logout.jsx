import { useNavigate } from "react-router-dom";
import React from 'react'
import { LogOut } from "lucide-react";


export function Logout(){
    const navigate = useNavigate();


   async function logout(){
    localStorage.setItem("token","")
    navigate("/")
   }
    return(
        <div>
           
           <button  onClick={logout} className="w-25 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
           <LogOut/>
             Logout
           </button>
        </div>
    )
}