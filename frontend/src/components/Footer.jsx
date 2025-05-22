import React from "react";
import { assets } from "../assets/assets";
import { Instagram, Facebook, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <div className="px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-8 py-16">
          {/* Logo Section */}
          <div className="space-y-4">
            <img
              src={assets.logo}
              alt="Clothing Logo"
              className="h-10 w-auto"
            />
            <p className="text-gray-400">
              Your one-step destination for trendy fashion that expresses your
              unique style.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* SHOP Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4 uppercase">SHOP</h2>
            <ul className="space-y-2 text-gray-400">
              <li>Men’s Clothing</li>
              <li>Women’s Clothing</li>
              <li>Kids’ Clothing</li>
              <li>Collections</li>
            </ul>
          </div>

          {/* SUPPORT Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4 uppercase">SUPPORT</h2>
            <ul className="space-y-2 text-gray-400">
              <li>FAQ</li>
              <li>Shipping Information</li>
              <li>Returns & Exchanges</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* LEGAL Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4 uppercase">LEGAL</h2>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700" />

        <div className="py-8 text-center text-gray-400">
          <p>Copyright© 2025 Finezto. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
