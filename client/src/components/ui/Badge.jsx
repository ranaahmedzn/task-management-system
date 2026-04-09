"use client";

import React from "react";

const Badge = ({
  variant = "light",
  color = "primary",
  children,
  className = "",
}) => {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  
  const variants = {
    light: {
      primary: "bg-brand-50 text-brand-600",
      success: "bg-green-50 text-green-600",
      error: "bg-red-50 text-red-600",
      warning: "bg-orange-50 text-orange-600",
    },
    solid: {
      primary: "bg-brand-500 text-white",
      success: "bg-green-500 text-white",
      error: "bg-red-500 text-white",
      warning: "bg-orange-500 text-white",
    },
  };

  return (
    <span className={`${baseStyles} ${variants[variant][color]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
