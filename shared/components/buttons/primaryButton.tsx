import React from "react";
import type { LucideProps } from 'lucide-react';

interface PrimaryButtonProps {
    Icon: React.ElementType<LucideProps>;  // Updated to handle icon components
    text: string;
    onClick?: () => void;
    label?: string;
    disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    Icon,
    text,
    onClick,
    label,
    disabled = false,
}) => {
    return(
        <div className="space-y-4 p-4">
                <button 
                onClick={onClick}
                disabled={disabled}
                aria-label={label}
                className="w-full group flex items-center gap-2 px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <Icon className="h-4 w-4" />
                    <span>{text}</span>
                </button>
            </div>
    );
}

export default PrimaryButton;
