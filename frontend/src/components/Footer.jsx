import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">ShopSphere</h2>
            <p className="mt-4 text-gray-400">
              Your one-stop destination for premium products. Shop smart, save more, and enjoy the best deals online.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-2xl transition hover:text-blue-400">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl transition hover:text-blue-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl transition hover:text-pink-400">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl transition hover:text-blue-500">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-6 space-y-3">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="transition hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="transition hover:text-white">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/orders" className="transition hover:text-white">
                  Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white">Support</h3>
            <ul className="mt-6 space-y-3">
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Contact Info</h3>
            <ul className="mt-6 space-y-3 text-gray-400">
              <li>📧 support@shopsphere.com</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 123 Shopping Street, Delhi 110001</li>
              <li>🕐 Mon - Fri: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-800"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-gray-400">
            &copy; {currentYear} ShopSphere. All rights reserved. | Designed with ❤️ by our team
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
