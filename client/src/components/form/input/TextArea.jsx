"use client";

import React from "react";

const TextArea = ({
  placeholder,
  value,
  onChange,
  className = "",
  disabled = false,
  rows = 4,
}) => {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-sm transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 text-gray-900 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed ${className}`}
    />
  );
};

export default TextArea;
