import React from "react";
import { cn } from "../../lib/utils";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleClose,
  className,
  children,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div
        className={cn(
          "bg-white rounded-lg shadow-lg relative px-6 py-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
