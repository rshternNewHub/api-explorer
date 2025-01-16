import React from 'react';
import TreeView from '../../../../shared/components/other/tree';

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
    const data = [
        {
          
            value: "Today",
            isDir: true,
            children: [
            { value: "https://example.com", isDir: false, method: "GET" },
            { value: "https://example.com", isDir: false, method: "POST" }
            ]
        },
        {
            value: "Yesterday",
            isDir: true,
            children: [
                { value: "https://example.com", isDir: false, method: "PUT" },
                { value: "https://example.com", isDir: false, method: "POST" }
            ]
        },
        {
            value: "Last Week",
            isDir: true,
            children: [
                { value: "https://example.com", isDir: false, method: "PATCH" },
                { value: "https://example.com", isDir: false, method: "GET" }
            ]
        },
        {
            value: "Last Month",
            isDir: true,
            children: [
                { value: "https://example.com", isDir: false, method: "PUT" },
                { value: "https://example.com", isDir: false, method: "PATCH" }
            ]
        },
        {
            value: "11/2024",
            isDir: true,
            children: [
                { value: "https://example.com", isDir: false, method: "PUT" },
                { value: "https://example.com", isDir: false, method: "DELETE" }
            ]
        }
      ];

    return(
        <>
            <TreeView initialData={data} />
        </>
    );
}

export default History;