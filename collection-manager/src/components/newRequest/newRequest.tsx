import React from "react";
import {CirclePlus} from 'lucide-react';
import PrimaryButton from '../../../../shared/components/buttons/primaryButton';

const NewRequest:React.FC = () => {

    return(
        <>
            <PrimaryButton Icon={CirclePlus} text={"New Request"} onClick={()=> {console.log("new requests button clicked")}} />
        </>
    );

}

export default NewRequest;