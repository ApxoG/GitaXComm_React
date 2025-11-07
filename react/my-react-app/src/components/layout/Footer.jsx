import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold tracking-wider">FASCO</div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#" className="text-gray-600 hover:text-black">
              Support Center
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Invoicing
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Contact
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Careers
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              FAQs
            </a>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-600 text-sm">
          Copyright 2020 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
