import React, { useState } from "react";
import Button from "../common/Button";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full fixed top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold text-primary">Flavored</span>
          <img className="h-9" src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-semibold text-foreground items-center">
          <a href="#home" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="#menu" className="hover:text-primary transition-colors">
            Coffee Menu
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact us
          </a>
          <Button className="rounded-full px-6 py-2">Coffee Shop</Button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-foreground">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t text-foreground px-4 py-4 space-y-3 text-center">
          <a
            href="#home"
            onClick={toggleMenu}
            className="block hover:text-primary"
          >
            Home
          </a>
          <a
            href="#coffee-menu"
            onClick={toggleMenu}
            className="block hover:text-primary"
          >
            Coffee Menu
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="block hover:text-primary"
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="block hover:text-primary"
          >
            Contact us
          </a>
          <Button className="w-full mt-2 rounded-full">Coffee Shop</Button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
