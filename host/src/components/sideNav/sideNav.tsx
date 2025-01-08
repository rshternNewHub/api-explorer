import React from "react";
import { Search, ChevronRight, ChevronDown, Folder, CirclePlus  } from 'lucide-react';

const CollectionManager = React.lazy(() => import('collectionManager/CollectionManager'));

//this element will be in charge of loading the various MFE's in the main content window
const SideNav: React.FC = () => {
    const isOpen = true;
    return (
        <div className="h-full flex flex-col"> {/* Changed to flex layout */}
            {/* Top section - will stay at natural height */}
            <div className="space-y-4 p-4">
                <button className="w-full group flex items-center gap-2 px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <CirclePlus className="h-4 w-4" />
                    <span>New Request</span>
                </button>

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
            
            {/* Navigation tabs - will stay at natural height */}
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                <ul className="flex flex-wrap w-full -mb-px">
                    <li className="w-1/3">
                        <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active">Collections</a>
                    </li>
                    <li className="w-1/3">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Environments</a>
                    </li>
                    <li className="w-1/3">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">History</a>
                    </li>
                </ul>
            </div>

            
            
            {/* Bottom navigation - will stick to bottom */}
            <div className="border-t mt-auto"> {/* mt-auto pushes it to bottom */}
                <div className="p-4 space-y-1">
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Docs</div>
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Help</div>
                </div>
            </div>
            <CollectionManager />
        </div>
    )
}

export default SideNav;