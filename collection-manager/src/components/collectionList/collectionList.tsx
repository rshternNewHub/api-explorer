import React from 'react';
import TreeView from '../../../../shared/components/other/tree';
const CollectionList:React.FC = () => {

    //addFolder - should be able to add folder under root and under other folders
    //addCollectionItem - not sure if there will be collection item on root level or basic folder like my collections
    //updateFolder - rename folder
    //deleteFolder (and children collection items)
    //updateCollection - move to request builder view for update and save - maybe this is checked once anything is updated 
    //on request builder view and the save button gets a different color once new changes applied
    //deleteCollection - deletes a collection item
    //handleDrag
    const data = [
        {
          value: "CRUD Operations",
          isDir: true,
          children: [
            {
              value: "Get",
              isDir: true,
              children: [
                { value: "Get Site", isDir: false, method: "GET" },
                { value: "Get Plant", isDir: false, method: "GET" }
              ]
            },
            {
                value: "Post",
                isDir: true,
                children: [
                  { value: "Create Site", isDir: false, method: "POST" },
                  { value: "Create Plant", isDir: false, method: "POST" }
                ]
            },
            {
                value: "Update",
                isDir: true,
                children: [
                  { value: "Update Site", isDir: false, method: "PATCH" },
                  { value: "Update Plant", isDir: false, method: "PATCH" }
                ]
            },
            {
                value: "Delete",
                isDir: true,
                children: [
                  { value: "Delete Site", isDir: false, method: "DELETE" },
                  { value: "Delete Plant", isDir: false, method: "DELETE" }
                ]
            },
          ]
        }
      ];

    return(
        <>
            <TreeView initialData={data} />
        </>
    );
}

export default CollectionList;