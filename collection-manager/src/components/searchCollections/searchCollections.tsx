import React from "react";
import {Search} from 'lucide-react';

//this component will run search and filter on Collections, Environments and History components
const SearchCollections:React.FC = () => {
    return(
        <>
            <div className="space-y-4 px-4">
                <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 bg-white border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                </div>
            </div>
        </>
    );
}

export default SearchCollections;