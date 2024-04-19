import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ isOpen, toggleDropdown }) => {
  return (
    <div
      className={`dropdown-menu absolute bg-black text-white py-2 rounded-md shadow-lg ${
        isOpen ? "block z-10" : "hidden"
      }`}
    >
      <Link
        to="/products/nuts"
        className="block px-4 py-2 linear-walkaways"
        onClick={toggleDropdown}
      >
        Nuts
      </Link>
      <Link
        to="/products/seeds"
        className="block px-4 py-2 linear-walkaways"
        onClick={toggleDropdown}
      >
        Seeds
      </Link>
    </div>
  );
};

export default DropdownMenu;
