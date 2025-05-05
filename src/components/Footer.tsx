
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white p-4 border-t border-gray-200 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-500">
          <p>© 2025 Dashboard. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
