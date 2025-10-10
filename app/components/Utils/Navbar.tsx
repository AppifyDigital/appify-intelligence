"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/assets/svg/logo.svg";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#expertise", label: "Expertise" },
    { href: "/#products", label: "Products" },
    { href: "/#success-stories", label: "Success stories" },
    { href: "/contact", label: "Contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link and we're already on the home page
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const id = href.substring(2); // Remove "/#"
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 mx-auto max-w-7xl rounded-b-xl transition-all duration-300 ${
          isScrolled ? "bg-white/90 shadow-lg backdrop-blur-md" : "bg-white shadow-lg"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center">
                <Image src={Logo} alt="Appify Intelligence" width={40} height={40} />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-10 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[15px] font-normal text-gray-600 transition-colors hover:text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-gray-900" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
        />

        {/* Sidebar */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-full transform bg-white/95 shadow-2xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between border-b p-4">
            <Image src={Logo} alt="Appify Intelligence" width={40} height={40} />
            <button
              onClick={closeMobileMenu}
              className="rounded-lg p-2 transition-colors hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-900" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  closeMobileMenu();
                }}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="h-20 md:hidden" />
    </>
  );
}
