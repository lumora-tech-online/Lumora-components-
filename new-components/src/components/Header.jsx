import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react"; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between h-16 items-center">
              
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#1E40AF]">Medora</span>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-[#1E40AF]">Home</a>
            <a href="#" className="text-gray-700 hover:text-[#1E40AF]">Menu</a>
            <a href="#" className="text-gray-700 hover:text-[#1E40AF]">About</a>
            <a href="#" className="text-gray-700 hover:text-[#1E40AF]">Contact</a>
          </div>

          <div className="hidden lg:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E40AF] focus:outline-none"
            />
            <button className="ml-2 p-2 rounded-lg bg-[#1E40AF] text-white hover:bg-[#9333EA]">
              <Search size={18} />
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <User size={20} />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-[#1E40AF]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-[#1E40AF]">Home</a>
            <a href="#" className="block text-gray-700 hover:text-[#1E40AF]">Menu</a>
            <a href="#" className="block text-gray-700 hover:text-[#1E40AF]">About</a>
            <a href="#" className="block text-gray-700 hover:text-[#1E40AF]">Contact</a>

            <div className="mt-3 flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E40AF] focus:outline-none"
              />
              <button className="ml-2 p-2 rounded-lg bg-[#1E40AF] text-white hover:bg-[#9333EA]">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
