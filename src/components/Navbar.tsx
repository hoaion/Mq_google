import { motion } from "motion/react";
import { Zap, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useScroll } from "../hooks/useScroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(20);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const isLinkActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, children, className = "" }: { to: string, children: React.ReactNode, className?: string }) => (
    <Link 
      to={to} 
      onClick={() => setIsOpen(false)}
      className={`${className} text-sm font-bold font-sans transition-colors ${
        isLinkActive(to) ? "text-accent" : "text-primary hover:text-accent"
      }`}
    >
      {children}
    </Link>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || isOpen ? "bg-white/90 backdrop-blur-md shadow-sm h-16" : "bg-transparent h-20"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Zap className="text-white w-6 h-6 fill-white" />
            </div>
            <span className="text-2xl font-bold font-display tracking-tight uppercase">
              MQ<span className="text-accent">TECH</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/">Trang chủ</NavLink>
            <NavLink to="/san-pham">Sản phẩm</NavLink>
            <NavLink to="/tai-lieu">Tài liệu</NavLink>
            <Link to="/lien-he" className="px-6 py-2.5 bg-transparent border-2 border-primary text-primary rounded-full text-sm font-bold font-sans hover:bg-primary hover:text-white transition-all">
              Liên hệ
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-primary">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
        >
          <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
            <NavLink to="/" className="py-2 border-b border-gray-50">Trang chủ</NavLink>
            <NavLink to="/san-pham" className="py-2 border-b border-gray-50">Sản phẩm</NavLink>
            <NavLink to="/tai-lieu" className="py-2 border-b border-gray-50">Tài liệu</NavLink>
            <NavLink to="/lien-he" className="py-2 text-accent">Liên hệ</NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
