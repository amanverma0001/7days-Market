import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Features Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8 text-blue-400" />
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-sm text-gray-400">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="w-8 h-8 text-blue-400" />
              <div>
                <p className="font-medium">Easy Returns</p>
                <p className="text-sm text-gray-400">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-blue-400" />
              <div>
                <p className="font-medium">Secure Payment</p>
                <p className="text-sm text-gray-400">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="w-8 h-8 text-blue-400" />
              <div>
                <p className="font-medium">24/7 Support</p>
                <p className="text-sm text-gray-400">Dedicated support team</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-white transition-colors">Press Releases</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/sell" className="hover:text-white transition-colors">Sell on 7days Market</Link></li>
              <li><Link to="/affiliate" className="hover:text-white transition-colors">Become an Affiliate</Link></li>
              <li><Link to="/advertise" className="hover:text-white transition-colors">Advertise Your Products</Link></li>
              <li><Link to="/vendor" className="hover:text-white transition-colors">Become a Vendor</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Payment Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/business" className="hover:text-white transition-colors">Business Card</Link></li>
              <li><Link to="/rewards" className="hover:text-white transition-colors">Shop with Points</Link></li>
              <li><Link to="/reload" className="hover:text-white transition-colors">Reload Your Balance</Link></li>
              <li><Link to="/currency" className="hover:text-white transition-colors">Currency Converter</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/account" className="hover:text-white transition-colors">Your Account</Link></li>
              <li><Link to="/orders" className="hover:text-white transition-colors">Your Orders</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Rates</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">
                7days <span className="text-blue-400">Market</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} 7days Market. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
