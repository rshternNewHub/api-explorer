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
            <CollectionManager />
            </div>
            
            {/* Bottom navigation - will stick to bottom */}
            <div className="border-t mt-auto"> {/* mt-auto pushes it to bottom */}
                <div className="p-4 space-y-1">
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Docs</div>
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Help</div>
                </div>
            </div>
        </div>
    )
}

export default SideNav;