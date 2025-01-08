import React, { useState } from 'react';
import { SquareChevronDown } from 'lucide-react';
enum ApiMethods {
    Post = "Post",
    Get = "Get",
    Put = "Put",
    Patch = "Patch",
    Delete = "Delete"   
}

const MethodSelector: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState<string>(ApiMethods.Get);
    
    // Convert enum to array of key-value pairs
    const methodEntries = Object.entries(ApiMethods);

    const handleMethodSelect = (method: string) => {
        setSelectedMethod(method);
        setIsOpen(false);
    };
    
    return (
        <div className="relative inline-block text-left">       
            <button 
                onClick={() => setIsOpen(!isOpen)}
                id="dropdown-button" data-dropdown-toggle="dropdown" 
                className="flex-shrink-0 z-10 inline-flex items-center py-2 px-3 text-md font-medium bg-white border rounded-l-md hover:bg-gray-50" 
                type="button"> 
                {selectedMethod}
                   <SquareChevronDown size={18} />
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        <ul>
                        {methodEntries.map(([key, value]) => (
                                <li key= {key}>
                                    <a
                                        key={key}
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleMethodSelect(value);
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
};

export default MethodSelector;