import React from "react";
import { CircleUser, Settings, Bell } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <>
          <nav className="flex flex-1 overflow-hidden h-10 justify-between items-center gap-4 shadow-sm">
            <div className="px-4 py-4">Api-Explorer</div>
            <div className="flex justify-between items-center">
              <div className="px-2 py-4"><CircleUser /></div>
              <div className="px-2 py-4"><Settings /></div>             
              <div className="px-2 py-4">
              <button 
              type="button" 
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors relative"
              >
                <Bell className="h-4 w-4" />
                {/* Notification Badge */}
                <span className="flex items-center justify-center h-5 w-5 text-xs font-bold bg-white text-blue-600 rounded-full">
                    2
                </span>
              </button>
              </div>
            </div>    
          </nav>
        </>
    )
}

export default Header;

