import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} PastPaperGen. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
