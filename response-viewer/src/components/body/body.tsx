import React from "react";
import {Copy} from 'lucide-react';
const Body:React.FC = () => {
    return(
        <>
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center w-fill">
                    <h3>View</h3>
                    <button>Pretty</button>
                    <button>Raw</button>
                    <button>Preview</button>
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