"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

const Select = ({
  options,
  placeholder = "Select an option",
  value,
  onChange,
  className = "",
  parentClassName = "",
}) => {
  return (
    <div className={`relative ${parentClassName}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`h-11 w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 pr-10 text-sm focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 text-gray-900 ${className}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
        <ChevronDown size={18} />
      </div>
    </div>
  );
};

export default Select;
