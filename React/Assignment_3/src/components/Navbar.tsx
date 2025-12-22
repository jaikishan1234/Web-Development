import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-10">
      {/* Logo */}
      <div className="text-xl font-bold uppercase">
        DVSY
      </div>

      {/* Desktop Menu */}
      <ul className="flex uppercase items-center gap-5 tracking-tight">
        <li className="hidden md:block"><a className="p-3 rounded-md bg-[#1C1E1D]" href="#">designers</a></li>
        <li className="hidden md:block"><a className="p-3 rounded-md bg-[#1C1E1D]" href="#">collabs</a></li>
        <li className="hidden md:block"><a className="p-3 rounded-md bg-[#1C1E1D]" href="#">events</a></li>
        <li className="hidden md:block"><a className="p-3 rounded-md bg-[#1C1E1D]" href="#">blog</a></li>
        <li className="hidden md:block"><a className="p-3 rounded-md bg-[#1C1E1D]" href="#">card</a></li>
        <li><a className="p-3 rounded-md bg-[#EB6F55] text-black" href="#">get in touch</a></li>
      </ul>

    </nav>
  )
}

export default Navbar
