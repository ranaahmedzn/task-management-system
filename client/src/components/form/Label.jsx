"use client";

import React from "react";

const Label = ({ children, className = "" }) => {
  return (
    <label className={`block mb-1.5 text-sm font-medium text-gray-700 ${className}`}>
      {children}
    </label>
  );
};

export default Label;
