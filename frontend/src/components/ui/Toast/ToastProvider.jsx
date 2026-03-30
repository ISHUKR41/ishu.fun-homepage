// components/ui/Toast/ToastProvider.jsx
// Toast notification system with queue management

import { createContext, useContext, useState, useCallback } from 'react';
import Toast from './Toast';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

export default function ToastProvider({ children, position = 'top-right', maxToasts = 3 }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, options = {}) => {
    const id = Math.random().toString(36).substring(2, 9);
    const toast = {
      id,
      message,
      type: options.type || 'info', // success, error, warning, info
      duration: options.duration || 4000,
      action: options.action,
      ...options,
    };

    setToasts((prev) => {
      const newToasts = [...prev, toast];
      // Limit to maxToasts
      if (newToasts.length > maxToasts) {
        return newToasts.slice(-maxToasts);
      }
      return newToasts;
    });

    // Auto-dismiss
    if (toast.duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration);
    }

    return id;
  }, [maxToasts]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const success = useCallback((message, options) => addToast(message, { ...options, type: 'success' }), [addToast]);
  const error = useCallback((message, options) => addToast(message, { ...options, type: 'error' }), [addToast]);
  const warning = useCallback((message, options) => addToast(message, { ...options, type: 'warning' }), [addToast]);
  const info = useCallback((message, options) => addToast(message, { ...options, type: 'info' }), [addToast]);

  const value = {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className={`toast-container toast-${position}`}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
