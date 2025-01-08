import React from "react";
import {Copy} from 'lucide-react';
const Body:React.FC = () => {
    return(
        <>
            <div className="flex justify-between items-center">
                <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="text-sm text-gray-500">View: </h3>
                    <button className="text-sm text-blue-600 font-medium hover:text-gray-800">Pretty</button>
                    <button className="text-sm text-blue-600 font-medium hover:text-gray-800">Raw</button>
                    <button className="text-sm text-blue-600 font-medium hover:text-gray-800 ">Preview</button>
                </div>
                <div className="flex">
                    <button><Copy size={18}/></button>
                </div>
            </div>
            <div className="flex">
                <h3>Body Viewer</h3>
            </div>
        </>
    );
}

export default Body;