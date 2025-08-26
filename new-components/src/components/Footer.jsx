import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer =()=>{
  return (
    <footer className="bg-[#1E40AF] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
       
        <div>
          <h2 className="text-2xl font-bold text-white">Medora</h2>
          <p className="mt-3 text-gray-200">
           Trustworthy and Compassionate Healthcare Solutions
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#F59E0B]">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-[#9333EA] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#9333EA] transition">About</a></li>
            <li><a href="#" className="hover:text-[#9333EA] transition">Services</a></li>
            <li><a href="#" className="hover:text-[#9333EA] transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#F59E0B]">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-[#9333EA] transition">Docs</a></li>
            <li><a href="#" className="hover:text-[#9333EA] transition">Blog</a></li>
            <li><a href="#" className="hover:text-[#9333EA] transition">FAQs</a></li>
            <li><a href="#" className="hover:text-[#9333EA] transition">Support</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#F59E0B]">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="p-2 rounded-full bg-white text-[#1E40AF] hover:bg-[#9333EA] hover:text-white transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-[#1E40AF] hover:bg-[#9333EA] hover:text-white transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-[#1E40AF] hover:bg-[#9333EA] hover:text-white transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-[#1E40AF] hover:bg-[#9333EA] hover:text-white transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#172554] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Medora. All rights reserved.</p>
        
        </div>
      </div>
    </footer>
  );
}

export default Footer