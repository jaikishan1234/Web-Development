import { useState } from "react";
import { MoveUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-5 md:px-10 lg:px-20 py-4">
      {/* Top navbar row */}
      <div className="flex items-center justify-between">
        {/* Left links (desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">About</a>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/nav.png" alt="Astratto logo" width={36} />
          <span className="font-semibold text-2xl">Astratto</span>
        </div>

        {/* Right actions (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#">Careers</a>
          <button className="flex items-center gap-2 border border-orange-300 px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-50 transition">
            Contact Us
            <MoveUpRight size={16} />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* FIX: Removed 'w-[70%] max-w-5xl mx-auto'.
         Added 'w-full'. 
         Since the parent <nav> has padding (px-5), 'w-full' here means 
         "full width of the content area", ensuring it aligns perfectly 
         with the items above.
      */}
      <div className="mt-4 h-px bg-gray-200 w-full" />

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-white z-50">
          {/* Mobile header */}
          <div className="flex items-center justify-between p-5 border-b">
            <div className="flex items-center gap-2">
              <img src="/nav.png" alt="Astratto logo" width={36} />
              <span className="font-semibold">Astratto</span>
            </div>

            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Mobile links */}
          <div className="p-6 flex flex-col gap-6 text-lg">
            <a href="#">Services</a>
            <a href="#">Work</a>
            <a href="#">About</a>
            <a href="#">Careers</a>

            <button className="mt-6 flex items-center gap-2 border border-orange-300 px-6 py-3 rounded-full w-fit">
              Contact Us
              <MoveUpRight size={18} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;