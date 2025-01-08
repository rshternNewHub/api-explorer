import React from 'react';

const Status:React.FC = () => {
    return(
        <>
            <ul className="flex items-center justify-between p-4 border-b w-fill">
                <li key="status" className="flex w-1/3 items-center space-x-2 gap-4">
                    <div className="status text-gray-500">Status:</div>
                    <div className="status-data px-2 py-1 bg-green-100 text-green-700 rounded">200 OK</div>
                </li>
                <li key="time" className="flex w-1/3 items-center space-x-2 gap-4">
                    <div className="time text-gray-500">Time:</div>
                    <div className="time-data text-gray-500">120ms</div>
                </li>
                <li key="size" className="flex w-1/3 items-center space-x-2 gap-4">
                    <div className="size text-gray-500">Size:</div>
                    <div className="size-data text-gray-500">1.1KB</div>
                </li>
            </ul>
        </>
    );
}

export default Status;