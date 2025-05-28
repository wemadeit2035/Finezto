import React from "react";
import { assets } from "../assets/assets";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 py-8">
          {/* Logo Section */}
          <div className="space-y-2">
            <img src={assets.logo} alt="Clothing Logo" className="h-8 w-auto" />
            <p className="text-gray-400 text-sm">
              Your one-step destination for trendy fashion that expresses your
              unique style.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* SHOP Column */}
          <div>
            <h2 className="text-base font-semibold mb-2 uppercase">SHOP</h2>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>Men’s Clothing</li>
              <li>Women’s Clothing</li>
              <li>Kids’ Clothing</li>
              <li>Collections</li>
            </ul>
          </div>

          {/* SUPPORT Column */}
          <div>
            <h2 className="text-base font-semibold mb-2 uppercase">SUPPORT</h2>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>FAQ</li>
              <li>Shipping Information</li>
              <li>Returns & Exchanges</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* LEGAL Column */}
          <div>
            <h2 className="text-base font-semibold mb-2 uppercase">LEGAL</h2>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700" />

        <div className="py-4 text-center text-sm text-gray-400">
          <p>Copyright© 2025 Finezto. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
