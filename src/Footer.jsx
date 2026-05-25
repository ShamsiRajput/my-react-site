import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#f8fafc] border-t border-gray-200">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-4 py-6">
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-3">
<div className="flex flex-col items-center">
  
  <img
    src={logo}   // ya "/assets/logo.png"
    alt="Logo"
    className="w-10 h-10 object-contain mb-1"
  />
  </div>

  <h2 className="text-xl font-bold text-gray-900 leading-none">
    coffee<span className="text-[#F59E0B]">CODE</span>.Hub
  </h2>

</div>

            <p className="text-base text-gray-600 leading-relaxed">
              Modern digital solutions for startups, businesses & creators.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-[#F59E0B] hover:text-white hover:border-[#F59E0B] transition-all"
                  >
                    <Icon className="text-sm" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>

            <div className="space-y-3 text-base text-gray-600">
              <Link to="/" className="block hover:text-[#F59E0B]">Home</Link>
              <Link to="/about" className="block hover:text-[#F59E0B]">About</Link>
              <Link to="/services" className="block hover:text-[#F59E0B]">Services</Link>
              <Link to="/projects" className="block hover:text-[#F59E0B]">Projects</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Services
            </h4>

            <div className="space-y-3 text-base text-gray-600">
              <p>Web Development</p>
              <p>Mobile Apps</p>
              <p>UI/UX Design</p>
              <p>Logo Design</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-base text-gray-600">
              <a href="https://wa.me/923114909975" className="block hover:text-[#F59E0B]">
                0311 4909975
              </a>

              <a href="mailto:coffeecodehub@gmail.com" className="block hover:text-[#F59E0B] break-all">
                coffeecodehub@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 ">
          
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 CoffeeCODEHub. All rights reserved.
          </p>

          <p className="text-sm text-gray-400 " >
            Designed by CoffeeCODEHub
  



          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;