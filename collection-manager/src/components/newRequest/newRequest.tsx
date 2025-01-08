import React from "react";
import {CirclePlus} from 'lucide-react';
const NewRequest:React.FC = () => {
    return(
        <>
            <div className="space-y-4 p-4">
                <button className="w-full group flex items-center gap-2 px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <CirclePlus className="h-4 w-4" />
                    <span>New Request</span>
                </button>
            </div>
        </>
    );

}

export default NewRequest;