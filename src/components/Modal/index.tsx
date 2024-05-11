import React, { ReactNode } from 'react';
import CloseIcon from '../../assets/icons/CloseIcon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={onClose}
          ></div>
          <div className="bg-white py-8 px-10 rounded-lg z-50">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none pb-4"
                onClick={onClose}
              >
                <CloseIcon />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
