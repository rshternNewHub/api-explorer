import React, {useState} from "react";
import { ChevronDown } from 'lucide-react';

interface DropDownButtonProps {
    size?: 'sm' | 'md' | 'lg';
    onOptionSelect?: (option: string) => void;
    options: object;
    disabled?: boolean;
}

const DropDownButton:React.FC<DropDownButtonProps> = ({
    size = 'md',
    onOptionSelect,
    options,
    disabled = false,
    }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>(Object.values(options)[0]);
    const optionsEntries = Object.entries(options);

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onOptionSelect
    };

    const sizeMap = {
        sm: {
            icon: 16,
        },
        md: {
            icon: 20,
        },
        lg: {
            icon: 24,
        },
    };

    return(
        <div className="relative inline-block text-left">       
        <button 
            onClick={() => setIsOpen(!isOpen)}
            data-dropdown-toggle="dropdown" 
            className="flex flex-row z-10 items-center py-2.5 px-6 text-md font-medium bg-white border rounded-l-md hover:bg-gray-50" 
            type="button"
            > 
            <span className="pr-2">{selectedOption}</span>
            <ChevronDown size={sizeMap[size].icon} />
        </button>

        {isOpen && (
            <div className="absolute left-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                    <ul>
                    {optionsEntries.map(([key, value]) => (
                            <li key= {key}>
                                <a
                                    key={key}
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleOptionSelect(value);
                                    }}
                                >
                                    {value}
                                </a>
                            </li>
                        ))}
                        
                    </ul>
                    
                </div>
            </div>
        )}
    </div>
    );
}

export default DropDownButton;