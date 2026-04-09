"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "../../../../components/ui/Table";
import Select from "../../../../components/form/Select";

const initialTasks = [
  {
    id: 1,
    title: "Update Project Documentation",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Fix Navigation Bug",
    status: "To Do",
  },
  {
    id: 3,
    title: "Prepare Client Presentation",
    status: "Completed",
  },
  {
    id: 4,
    title: "Code Review - PR #123",
    status: "In Progress",
  },
];

const statusOptions = [
  { value: "To Do", label: "To Do" },
  { value: "In Progress", label: "In Progress" },
  { value: "Completed", label: "Completed" },
];

export default function MyTasksPage() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleStatusChange = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Personal Task List</h2>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell isHeader>Title</TableCell>
              <TableCell isHeader className="w-48">Status</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="font-medium text-gray-900">
                  {task.title}
                </TableCell>
                <TableCell className="w-1/3">
                  <Select
                    options={statusOptions}
                    value={task.status}
                    onChange={(value) => handleStatusChange(task.id, value)}
                    className="h-9 py-1"
                    parentClassName="max-w-[250px]"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
