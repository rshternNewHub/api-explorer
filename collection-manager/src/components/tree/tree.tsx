import React from "react";
import { ChevronRight, ChevronDown, Folder  } from 'lucide-react';

//the tree component should handle all the tree logic
//create folder/s
//create collection under folder
//move folders/collections under other folders

const Tree:React.FC = () => {

    const isOpen = true;
    return(
        <>
        {/* Collections section - will take remaining space */}
            <div className="flex-1 overflow-y-auto p-4"> {/* Added flex-1 and overflow */}
                <div className="">
                    {/* Collection Header */}
                    <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer">
                        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                        <Folder className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Collection Name</span>
                    </div>
                    
                    {/* Collection Items */}
                    {isOpen && (
                        <div className="ml-6 border-l pl-2 space-y-1">
                            <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-100 rounded-md cursor-pointer">
                                <span className="text-xs font-medium px-1.5 py-0.5 bg-green-100 text-green-700 rounded">GET</span>
                                <span className="text-sm">Request Name</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>

    );
}

export default Tree;