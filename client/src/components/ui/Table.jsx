"use client";

import React from "react";

export const Table = ({ children, className = "" }) => (
  <div className="overflow-x-auto">
    <table className={`w-full text-left border-collapse ${className}`}>{children}</table>
  </div>
);

export const TableHeader = ({ children, className = "" }) => (
  <thead className={`bg-gray-50/50 border-b border-gray-100 ${className}`}>{children}</thead>
);

export const TableBody = ({ children, className = "" }) => (
  <tbody className={className}>{children}</tbody>
);

export const TableRow = ({ children, className = "" }) => (
  <tr className={`border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors ${className}`}>
    {children}
  </tr>
);

export const TableCell = ({ children, isHeader = false, className = "" }) => {
  const Tag = isHeader ? "th" : "td";
  return (
    <Tag className={`px-6 py-4 text-sm ${isHeader ? "font-semibold text-gray-600 uppercase tracking-wider" : "text-gray-700"} ${className}`}>
      {children}
    </Tag>
  );
};
