"use client";

import React, { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import Button from "../../../../components/ui/Button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "../../../../components/ui/Table";
import Badge from "../../../../components/ui/Badge";
import Modal from "../../../../components/ui/Modal";
import InputField from "../../../../components/form/input/InputField";
import TextArea from "../../../../components/form/input/TextArea";
import Select from "../../../../components/form/Select";
import Label from "../../../../components/form/Label";
import ConfirmationModal from "../../../../components/ui/ConfirmationModal";

const initialTasks = [
  {
    id: 1,
    title: "Setup Project Repository",
    assignee: "John Doe",
    status: "Completed",
    createdAt: "2026-04-01",
  },
  {
    id: 2,
    title: "Design Database Schema",
    assignee: "Jane Smith",
    status: "In Progress",
    createdAt: "2026-04-03",
  },
  {
    id: 3,
    title: "Implement Authentication",
    assignee: "Mike Johnson",
    status: "To Do",
    createdAt: "2026-04-05",
  },
];

const users = [
  { value: "John Doe", label: "John Doe" },
  { value: "Jane Smith", label: "Jane Smith" },
  { value: "Mike Johnson", label: "Mike Johnson" },
  { value: "Sarah Wilson", label: "Sarah Wilson" },
];

const statusOptions = [
  { value: "To Do", label: "To Do" },
  { value: "In Progress", label: "In Progress" },
  { value: "Completed", label: "Completed" },
];

export default function DashboardPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    status: "To Do",
    assignee: "",
  });

  const handleOpenTaskModal = (task = null) => {
    if (task) {
      setCurrentTask(task);
      setTaskForm({
        title: task.title,
        description: task.description || "",
        status: task.status,
        assignee: task.assignee,
      });
    } else {
      setCurrentTask(null);
      setTaskForm({
        title: "",
        description: "",
        status: "To Do",
        assignee: "",
      });
    }
    setIsTaskModalOpen(true);
  };

  const handleSaveTask = (e) => {
    e.preventDefault();
    if (currentTask) {
      // Edit task
      setTasks(
        tasks.map((t) =>
          t.id === currentTask.id ? { ...t, ...taskForm } : t
        )
      );
    } else {
      // Create task
      const newTask = {
        id: tasks.length + 1,
        ...taskForm,
        createdAt: new Date().toISOString().split("T")[0],
      };
      setTasks([...tasks, newTask]);
    }
    setIsTaskModalOpen(false);
  };

  const handleDeleteTask = () => {
    setTasks(tasks.filter((t) => t.id !== currentTask.id));
    setIsDeleteModalOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "success";
      case "In Progress":
        return "warning";
      case "To Do":
        return "primary";
      default:
        return "light";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Task Management</h2>
        <Button
          onClick={() => handleOpenTaskModal()}
          startIcon={<Plus size={20} />}
        >
          Create Task
        </Button>
      </div>

      {/* Task Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell isHeader>Title</TableCell>
              <TableCell isHeader>Assignee</TableCell>
              <TableCell isHeader>Status</TableCell>
              <TableCell isHeader>Created At</TableCell>
              <TableCell isHeader className="text-right">
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="font-medium text-gray-900">
                  {task.title}
                </TableCell>
                <TableCell>{task.assignee}</TableCell>
                <TableCell>
                  <Badge color={getStatusColor(task.status)}>
                    {task.status}
                  </Badge>
                </TableCell>
                <TableCell>{task.createdAt}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => handleOpenTaskModal(task)}
                      className="p-2 text-gray-400 hover:text-brand-500 hover:bg-brand-50 rounded-lg transition-colors"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => {
                        setCurrentTask(task);
                        setIsDeleteModalOpen(true);
                      }}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Task Modal (Create/Edit) */}
      <Modal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        title={currentTask ? "Edit Task" : "Create Task"}
      >
        <form onSubmit={handleSaveTask} className="space-y-4">
          <div>
            <Label>Title</Label>
            <InputField
              placeholder="Task Title"
              value={taskForm.title}
              onChange={(e) =>
                setTaskForm({ ...taskForm, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <Label>Description</Label>
            <TextArea
              placeholder="Task Description"
              value={taskForm.description}
              onChange={(e) =>
                setTaskForm({ ...taskForm, description: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Status</Label>
              <Select
                options={statusOptions}
                value={taskForm.status}
                onChange={(value) =>
                  setTaskForm({ ...taskForm, status: value })
                }
              />
            </div>
            <div>
              <Label>Assign User</Label>
              <Select
                placeholder="Select User"
                options={users}
                value={taskForm.assignee}
                onChange={(value) =>
                  setTaskForm({ ...taskForm, assignee: value })
                }
              />
            </div>
          </div>
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <Button
              variant="outline"
              onClick={() => setIsTaskModalOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              {currentTask ? "Save Changes" : "Create Task"}
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteTask}
        title="Delete Task"
        message={`Are you sure you want to delete the task "${currentTask?.title}"?`}
      />
    </div>
  );
}
