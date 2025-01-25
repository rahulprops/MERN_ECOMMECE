import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ShopLogo</h4>
            <p className="text-sm">
              Your one-stop shop for the best products. We provide the best deals and fast delivery for all your shopping needs.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Shop</a></li>
              <li><a href="#" className="hover:text-blue-400">Deals</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="text-sm space-y-2">
              <li><a href="mailto:support@shoplogo.com" className="hover:text-blue-400">support@shoplogo.com</a></li>
              <li><a href="tel:+123456789" className="hover:text-blue-400">+1 234 567 89</a></li>
              <li>123 Main Street, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">&copy; 2025 ShopLogo. All Rights Reserved.</p>
            <div className="space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-lg hover:text-blue-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-lg hover:text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-lg hover:text-blue-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-lg hover:text-blue-400">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
