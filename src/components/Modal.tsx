import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

interface ModalProps {
  onClose: () => void;
  onConfirm: () => void;
  user: { first_name: string; last_name: string } | null;
}

const Modal: React.FC<ModalProps> = ({ onClose, onConfirm, user }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black/70 bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <BackgroundGradient className="p-[2px]">
      <div className="bg-slate-900/95 text-white rounded-2xl p-6 z-10 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
        <p>Are you sure you want to delete {user.first_name} {user.last_name}?</p>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Confirm
          </button>
        </div>
      </div>
      </BackgroundGradient>
    </div>
  );
};

export default Modal;
