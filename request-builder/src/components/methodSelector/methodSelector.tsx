import React from 'react';
import DropDownButton from '../../../../shared/components/buttons/dropDownButton'

enum ApiMethods {
    Post = "Post",
    Get = "Get",
    Put = "Put",
    Patch = "Patch",
    Delete = "Delete"   
}

const MethodSelector: React.FC = () => {
    const methodEntries = Object.values(ApiMethods);
    return (
        <div>       
          <DropDownButton onOptionSelect={()=> {}} options={methodEntries} />
        </div>
    );
};

export default MethodSelector;