import React from "react";
import IconButton from '../../../../shared/components/buttons/iconButton';
import TextButton from '../../../../shared/components/buttons/textButton';
import {Copy} from 'lucide-react';

const Body:React.FC = () => {
    const onCopy = () => {
        console.log('Copy Response Clicked');
    }
    return(
        <>
            <div className="flex justify-between items-center">
                <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="text-sm text-gray-500 mx-2">View: </h3>
                    <TextButton 
                    size = 'sm'
                    onClick = {() => {}}
                    text = {"Pretty"}
                    variant = 'primary'
                    />
                    <TextButton 
                    size = 'sm'
                    onClick = {() => {}}
                    text = {"Raw"}
                    variant = 'primary'
                    />
                    <TextButton 
                    size = 'sm'
                    onClick = {() => {}}
                    text = {"Preview"}
                    variant = 'primary'
                    />
                </div>
                <div className="flex">
                <IconButton
                Icon={Copy}
                size="md"
                label="Copy Response"
                onClick={onCopy}
                variant="secondary"
                />
                </div>
            </div>
            <div className="flex">
                <h3>Body Viewer</h3>
            </div>
        </>
    );
}

export default Body;