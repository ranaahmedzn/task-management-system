"use client";

import React from "react";
import Modal from "./Modal";
import Button from "./Button";
import { AlertCircle } from "lucide-react";

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed? This action cannot be undone.",
  confirmText = "Delete",
  cancelText = "Cancel",
  variant = "danger",
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="flex flex-col items-center text-center">
        <div className={`p-3 rounded-full mb-4 ${variant === 'danger' ? 'bg-red-50 text-red-500' : 'bg-brand-50 text-brand-500'}`}>
          <AlertCircle size={32} />
        </div>
        <p className="text-gray-600 mb-8">{message}</p>
        
        <div className="flex items-center gap-3 w-full">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            {cancelText}
          </Button>
          <Button
            variant={variant}
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="flex-1"
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
