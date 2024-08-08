import React from 'react'

function Header() {
  return (
     <div className="navbar bg-gray-700 text-white">
     <div className="navbar-start text-black">
       <div className="dropdown">
         <div tabIndex={0} role="button" className="btn btn-yellow btn-circle">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-5 w-5"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M4 6h16M4 12h16M4 18h7" />
           </svg>
         </div>
         <ul
           tabIndex={0}
           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
           <li><a href='/Home'>Home</a></li>
           <li><a href='/Cars'>Cars</a></li>
           <li><a href='/Login'>Booking</a></li>
         </ul>
       </div>
     </div>
     <div className="navbar-center">
       <a className="btn btn-ghost text-xl">Prima Rent A Cars</a>
     </div>
     <div className="navbar-end">
     </div>
   </div>
  )
}

export default Header