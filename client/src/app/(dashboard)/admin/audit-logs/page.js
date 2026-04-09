"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "../../../../components/ui/Table";

const auditLogs = [
  {
    id: 1,
    timestamp: "2026-04-09 10:30:45",
    user: "John Doe",
    action: "Task Created",
    details: "Created task 'Setup Project Repository'",
  },
  {
    id: 2,
    timestamp: "2026-04-09 11:15:20",
    user: "Jane Smith",
    action: "Task Updated",
    details: "Changed status of 'Design Database Schema' to In Progress",
  },
  {
    id: 3,
    timestamp: "2026-04-09 12:05:10",
    user: "Admin User",
    action: "User Added",
    details: "Added new user 'Sarah Wilson'",
  },
  {
    id: 4,
    timestamp: "2026-04-09 13:45:30",
    user: "Mike Johnson",
    action: "Comment Added",
    details: "Added comment to 'Implement Authentication'",
  },
  {
    id: 5,
    timestamp: "2026-04-09 14:20:00",
    user: "John Doe",
    action: "Task Completed",
    details: "Marked 'Setup Project Repository' as Completed",
  },
];

export default function AuditLogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">System Audit History</h2>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell isHeader>Timestamp</TableCell>
              <TableCell isHeader>User</TableCell>
              <TableCell isHeader>Action</TableCell>
              <TableCell isHeader>Details</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {auditLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="text-gray-500 font-mono text-xs whitespace-nowrap">
                  {log.timestamp}
                </TableCell>
                <TableCell className="font-medium text-gray-900 whitespace-nowrap">
                  {log.user}
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {log.action}
                  </span>
                </TableCell>
                <TableCell className="text-gray-600">
                  {log.details}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
