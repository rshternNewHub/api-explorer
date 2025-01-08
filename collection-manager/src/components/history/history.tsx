import React from 'react';
import Tree from '../tree/tree';
const History:React.FC = () => {

    //folder should be marked by name/date
    //Today - >
    //Yesterday - >
    //Last Week - >
    //Last Two Weeks - >
    //Last Month - >
    //10/2024 - >
    
    //addToCollection
    //removeFromHistory
    return(
        <>
        <span>Today</span>
        {/* <span>Yesterday</span>
        <span>Last Week</span>
        <span>Last Two Weeks</span>
        <span>Last Month</span>
        <span>10/2024</span> */}
        <Tree />
        <Tree />
        </>
    );
}

export default History;