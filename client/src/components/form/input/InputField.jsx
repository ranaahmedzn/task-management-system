"use client";

import React from "react";

const InputField = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  disabled = false,
  error = false,
}) => {
  const baseClasses = "h-11 w-full rounded-lg border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500/20";
  const stateClasses = error 
    ? "border-red-500 focus:border-red-500" 
    : "border-gray-200 focus:border-brand-300";
  const disabledClasses = disabled ? "bg-gray-50 text-gray-400 cursor-not-allowed" : "bg-transparent text-gray-900";

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`${baseClasses} ${stateClasses} ${disabledClasses} ${className}`}
    />
  );
};

export default InputField;
