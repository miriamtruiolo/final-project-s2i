import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#42977d] py-4 text-center fixed bottom-0 left-0 right-0">
      <div className="container mx-auto text-gray-300">
        <p>&copy; {currentYear} Miriam Truiolo. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;