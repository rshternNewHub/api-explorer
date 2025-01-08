import React from 'react';

const Status:React.FC = () => {
    return(
        <>
            <ul className="flex flex-wrap w-full -mb-px">
                <li key="status" className="flex w-1/3 items-center justify-center gap-4">
                    <div className="status">Status:</div>
                    <div className="status-data">200 OK</div>
                </li>
                <li key="time" className="flex w-1/3 items-center justify-center gap-4">
                    <div className="time">Time:</div>
                    <div className="time-data">120ms</div>
                </li>
                <li key="size" className="flex w-1/3 items-center justify-center gap-4">
                    <div className="size">Size:</div>
                    <div className="size-data">1.1KB</div>
                </li>
            </ul>
        </>
    );
}

export default Status;