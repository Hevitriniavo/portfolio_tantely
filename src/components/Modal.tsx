import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export function Modal({ isOpen, onClose, children }: ModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="relative bg-white dark:bg-[#2c3034] p-6 shadow-xl w-full max-w-lg"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
