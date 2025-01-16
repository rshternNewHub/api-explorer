import React from "react";

interface TextButtonProps {
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    text: string;
    variant?: 'primary' | 'secondary' | 'disabled';
    disabled?: boolean;
}

const TextButton:React.FC<TextButtonProps> = ({
    size = 'md',
    onClick,
    text,
    variant = 'primary',
    disabled = false,
    
}) => {

    const sizeMap = {
        sm: {
            button: 'text-sm',
        },
        md: {
            button: 'text-base',
        },
        lg: {
            button: 'text-lg',
        },
    };

    const variantStyles = {
        primary: 'text-blue-600 hover:underline',
        secondary: 'text-gray-200 hover:underline',
        disabled: 'hover:text-gray-100 text-gray-600',
    };

    return(
        <>
            <button className={`
                font-medium mx-1
                ${sizeMap[size].button}
                ${variantStyles[variant]}
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            onClick={onClick}>{text}</button>
        </>
    );
};

export default TextButton;