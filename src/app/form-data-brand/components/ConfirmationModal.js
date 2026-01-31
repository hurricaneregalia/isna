// ConfirmationModal Component
// Handles confirmation, warning, or success messages in modal dialog

import { useEffect } from "react";

export default function ConfirmationModal({ isOpen, onClose, title, message, type = "info", onConfirm = null, confirmText = "OK", cancelText = "Batal" }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return {
          icon: "✅",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          buttonClass: "btn-success",
        };
      case "warning":
        return {
          icon: "⚠️",
          iconBg: "bg-yellow-100",
          iconColor: "text-yellow-600",
          buttonClass: "btn-warning",
        };
      case "error":
        return {
          icon: "❌",
          iconBg: "bg-red-100",
          iconColor: "text-red-600",
          buttonClass: "btn-error",
        };
      case "info":
      default:
        return {
          icon: "ℹ️",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          buttonClass: "btn-primary",
        };
    }
  };

  const styles = getTypeStyles();

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all">
        <div className="p-6">
          {/* Icon */}
          <div className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${styles.iconBg} mb-4`}>
            <span className={`text-2xl ${styles.iconColor}`}>{styles.icon}</span>
          </div>

          {/* Content */}
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-6">{message}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center">
            {onConfirm && (
              <button onClick={handleConfirm} className={`btn ${styles.buttonClass} btn-sm`}>
                {confirmText}
              </button>
            )}
            <button onClick={onClose} className="btn btn-outline btn-sm">
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
