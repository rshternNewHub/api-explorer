import React, { useState } from 'react';

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
                    <svg 
                        className="-mr-1 h-5 w-5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor" 
                        aria-hidden="true"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" 
                            clipRule="evenodd" 
                        />
                    </svg>
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