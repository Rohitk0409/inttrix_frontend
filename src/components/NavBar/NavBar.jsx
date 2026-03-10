import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  const navItem = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Services", route: "/services" },
    { label: "Projects", route: "/projects" },
    { label: "Pricing", route: "/pricing" },
    { label: "Contact", route: "/contact" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center gap-1">
            <span className="text-[#1F3A63]">Vinttrix</span>
            <span className="text-[#FF6247]">Edge</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            {navItem.map((item) => (
              <NavLink
                key={item.label}
                to={item.route}
                className="hover:text-[#1F3A63] transition"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#FF6247] text-white px-5 py-2 rounded-lg hover:opacity-90 transition">
              Get Quote
            </button>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col p-6 gap-4">
            {navItem.map((item) => (
              <NavLink
                key={item.label}
                to={item.route}
                className="text-gray-700 hover:text-[#1F3A63]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <button className="bg-[#FF6247] text-white py-2 rounded-lg mt-2">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
