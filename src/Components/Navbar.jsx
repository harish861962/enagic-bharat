import React from "react"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 shadow-lg border-b border-gray-200">

<div className="max-w-7xl mx-auto px-6">

<div className="flex items-center justify-between h-20">

<div className="text-3xl font-bold text-red-600">
 <a href="#">ENAGIC BHARAT</a>
</div>

<ul className="hidden lg:flex gap-10 font-semibold">

<li><a href="#">HOME</a></li>
<li><a href="#Product">PRODUCTS</a></li>
<li><a href="#office">OFFICE</a></li>
<li><a href="#contact">CONTACT</a></li>

</ul>

<button className="bg-red-600 text-white !px-8 !py-3 rounded-full font-semibold hover:cursor-pointer hover:bg-red-700 hover:shadow-xl hover:shadow-red-700/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
  <a href="#contact">Contact Us</a> 
</button>

</div>

</div>

</nav>
  )
}