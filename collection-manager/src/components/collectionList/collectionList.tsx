import React from 'react';
import Tree from '../tree/tree';
const CollectionList:React.FC = () => {

    //addFolder - should be able to add folder under root and under other folders
    //addCollectionItem - not sure if there will be collection item on root level or basic folder like my collections
    //updateFolder - rename folder
    //deleteFolder (and children collection items)
    //updateCollection - move to request builder view for update and save - maybe this is checked once anything is updated 
    //on request builder view and the save button gets a different color once new changes applied
    //deleteCollection - deletes a collection item
    //handleDrag

    return(
        <>
        <Tree />
        <Tree />
        </>
    );
}

export default CollectionList;