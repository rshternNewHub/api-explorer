import React from 'react';
import type { LucideProps } from 'lucide-react';

interface IconButtonProps {
    Icon: React.ElementType<LucideProps>;  // Updated to handle icon components
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    label?: string;
    variant?: 'primary' | 'secondary' | 'disabled';
    disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
    Icon,
    size = 'md',
    onClick,
    label,
    variant = 'primary',
    disabled = false,
}) => {

    const sizeMap = {
        sm: {
            icon: 16,
            button: 'p-2',
        },
        md: {
            icon: 20,
            button: 'p-3',
        },
        lg: {
            icon: 24,
            button: 'p-4',
        },
    };

    const variantStyles = {
        primary: 'text-blue-600 hover:text-blue-600',
        secondary: 'text-gray-600 hover:text-gray-700',
        disabled: 'hover:text-gray-100 text-gray-600',
    };

    return (
        <div className={"flex " + variantStyles[variant]}>
            <button
                onClick={onClick}
                disabled={disabled}
                aria-label={label}
                className={`
                    transition-colors
                    duration-200
                    flex
                    items-center
                    justify-center
                    ${sizeMap[size].button}
                    
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                `}
            >
                <Icon size={sizeMap[size].icon} />
            </button>
        </div>
    );
};

export default IconButton;
