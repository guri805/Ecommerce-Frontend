'use client'
import { useState } from "react";

const InputDropdown = ({ label, options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {label && <label className="block font-medium mb-1">{label}</label>}

      <div
        className="w-full border border-gray-300 rounded-lg px-4 py-2 flex justify-between items-center cursor-pointer bg-white hover:border-gray-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected || "Select an option"}</span>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 max-h-40 overflow-y-auto">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputDropdown;
